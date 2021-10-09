import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ethers } from 'ethers';
import { ConstantsService } from './constants.service';

@Injectable({
  providedIn: 'root'
})
export class Web3Service {

  private window: any = <any>window;
  public ACCOUNT: Subject<string> = new Subject();
  public web3: ethers.providers.Web3Provider|null = null;

  constructor(private constantsService: ConstantsService) { }

  public async connect() {
    if (this.window.ethereum) {
      this.web3 = new ethers.providers.Web3Provider(this.window.ethereum);
      await this.web3.send("eth_requestAccounts", []);

      const account = await this.web3.getSigner().getAddress();

      const chainId = (await this.web3.getNetwork()).chainId;
      this.checkChainId(chainId).then(() => this.ACCOUNT.next(account))
    }
  }

  private async checkChainId(chainId: number): Promise<void> {
    if (chainId !== 250 && chainId !== 4002) {
      try {
        await this.web3?.send('wallet_switchEthereumChain', [{chainId: this.constantsService.FANTOM_CHAIN_DETAILS.chainId}])
        return Promise.resolve();
      }
      catch (switchError) {
        if ((<any>switchError).code === 4902) {
          try {
            await this.web3?.send('wallet_addEthereumChain', [this.constantsService.FANTOM_CHAIN_DETAILS])
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
}
