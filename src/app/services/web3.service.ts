import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BigNumber, ethers } from 'ethers';
import { ConstantsService } from './constants.service';
import { Pool } from '../components/pool-card/Pool';
import { UserInfoPoolResponse } from '../utils/UserInfoPoolResponse';
import { PoolInfoResponse } from '../utils/PoolInfoResponse';
import { PriceService } from './price.service';

@Injectable({
  providedIn: 'root'
})
export class Web3Service {

  private window: any = <any>window;
  public ACCOUNT: Subject<string> = new Subject();
  public LOADED_BLOOD_POOLS: Subject<Pool> = new Subject(); 
  public web3: ethers.providers.Web3Provider|null = null;

  constructor(private constantsService: ConstantsService, private priceService: PriceService) { }

  public async connect() {
    if (this.window.ethereum) {
      this.web3 = new ethers.providers.Web3Provider(this.window.ethereum);
      await this.web3.send("eth_requestAccounts", []);

      const account = await this.web3.getSigner().getAddress();

      const chainId = (await this.web3.getNetwork()).chainId;
      this.checkChainId(chainId).then(() => {
        this.ACCOUNT.next(account);
      })
    }
  }

  private async checkChainId(chainId: number): Promise<void> {
    if (/*chainId !== 250 &&*/ chainId !== 4002) {
      try {
        await this.web3?.send('wallet_switchEthereumChain', [{chainId: this.constantsService.FANTOM_TESTNET_CHAIN_DETAILS.chainId}])
        return Promise.resolve();
      }
      catch (switchError) {
        if ((<any>switchError).code === 4902 || (<any>switchError).code === -32603) {
          try {
            await this.web3?.send('wallet_addEthereumChain', [this.constantsService.FANTOM_TESTNET_CHAIN_DETAILS])
            return Promise.resolve();
          }
          catch (addError) {
            return Promise.reject("Chain does not exist on your wallet")
          }
        }
        else {
          return Promise.reject("Chain does not exist on your wallet")
        }
      }
    }
    else {
      return Promise.resolve();
    }
  }

  public async loadPools() {
    if (!this.web3) {
      return Promise.reject("Your wallet is not connected");
    }

    const chainId = (await this.web3.getNetwork()).chainId;
    if (chainId !== 4002) {
      return Promise.reject("You are not connected to the right network");
    }

    this.constantsService.BLOOD_POOLS.forEach(async (bloodPool, index) => {
      const poolContract = new ethers.Contract(bloodPool.poolContractAddress, JSON.parse(this.constantsService.BLOOD_POOL_ABI_V1), this.web3?.getSigner());
      const stakedTokenContract = new ethers.Contract(bloodPool.stakeTokenAddress, JSON.parse(this.constantsService.TOKEN_ABI_V1), this.web3?.getSigner());

      const address = this.web3?.getSigner().getAddress();

      bloodPool.walletTokens = (await stakedTokenContract.balanceOf(address) as unknown as BigNumber).toString();
      bloodPool.depositFee = (await poolContract.FEE() as unknown as BigNumber).div(10).toString();
      bloodPool.pendingReward = (await poolContract.pendingReward(address) as unknown as BigNumber).toString();
      bloodPool.depositedTokens = (await poolContract.userInfo(address) as unknown as UserInfoPoolResponse).amount.toString();

      const rewardPerSecond: BigNumber = (await poolContract.rewardPerSecond() as unknown as BigNumber);
      const totalStaked: BigNumber = (await poolContract.poolInfo(0) as unknown as PoolInfoResponse).totalStaked;

      this.priceService.getPriceFromSpookySwap(bloodPool.rewardTokenAddress).subscribe(token => {
        const price = parseFloat(token.tokenDayData[0].priceUSD);

        bloodPool.apr = this.computeAPR(rewardPerSecond, totalStaked, price, price);

        this.LOADED_BLOOD_POOLS.next(bloodPool);
      });
    })

    return Promise.resolve();
  }

  private computeAPR(rewardPerSecond: BigNumber, totalStaked: BigNumber, rewardPrice: number, stakePrice: number): string {
    const dailyDistribution: number = rewardPerSecond.mul(Math.pow(10, 5)).div(Math.pow(10, 18).toString()).mul(86_400).toNumber() / Math.pow(10, 5);

    const annualizedRewards = dailyDistribution * 365 * rewardPrice;
    const valueStaked = totalStaked.div(Math.pow(10, 18).toString()).toNumber() * stakePrice;

    console.log();
    console.log(valueStaked);

    if (valueStaked === 0) {
      return "inf"
    }
    else {
      return (annualizedRewards / valueStaked * 100).toString();
    }
  }
}
