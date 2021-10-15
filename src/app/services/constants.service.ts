import { Injectable } from '@angular/core';
import vmpTokenABI from '../../abi/VMP.json';
import vmpBloodPoolABI from '../../abi/VMP_BloodPool.json';
import { Pool } from '../components/pool-card/Pool';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  public TRACKED_TOKEN: string = "0x841fad6eae12c286d1fd18d1d525dffa75c7effe";
  public ZERO_ADDRESS: string = "0x0000000000000000000000000000000000000000";
  public FTM_SCAN_API_KEY: string = "8ITSSZC5SEX7D74ERNYSS89MFG1GY7J1VU";
  public FTM_SCAN_BASE_URL: string = "https://api.ftmscan.com/api"
  public FTM_SCAN_MODULES = {
    ACCOUNT: 'account',
    STATS: 'stats',
  }
  public FTM_SCAN_ACTIONS = {
    TOKEN_BALANCE: "tokenbalance",
    TOKEN_SUPPLY: "tokensupply"
  }
  public FANTOM_CHAIN_DETAILS = {
    "chainId": '0xfa',
    "chainName": 'Fantom Opera',
    "nativeCurrency": {
      name: 'Fantom',
      symbol: 'FTM',
      decimals: 18
    },
    "rpcUrls": ['https://rpc.ftm.tools/'],
    "blockExplorerUrls": ['https://ftmscan.com'],
  }
  public FANTOM_TESTNET_CHAIN_DETAILS = {
    "chainId": '0xfa2',
    "chainName": 'Fantom Opera Testnet',
    "nativeCurrency": {
      name: 'Fantom Testnet',
      symbol: 'FTM',
      decimals: 18
    },
    "rpcUrls": ['https://rpc.testnet.fantom.network/'],
    "blockExplorerUrls": ['https://testnet.ftmscan.com/'],
  }

  public TOKEN_ABI_V1: string = vmpTokenABI.result;
  public BLOOD_POOL_ABI_V1: string = vmpBloodPoolABI.result;

  public VMP_TOKEN_ADDRESS = "0x75F4234579a9Bb9Dd1cA1Ba4832634275Cb305B8";
  
  public BLOOD_POOLS: Array<Pool> = new Array<Pool>(
    {
      stakeTokenAddress: this.VMP_TOKEN_ADDRESS,
      poolContractAddress: "0xEe8A641CF7A7e0cF0474a4F27f72e4E9D665C1D7",
      rewardTokenAddress: "0x841fad6eae12c286d1fd18d1d525dffa75c7effe",
      stakeTokenName: "Vampire",
      stakeTokenSymbol: "VMP",
      rewardTokenName: "Vampire",
      rewardTokenSymbol: "VMP",
      rewardTokenLogo: "../../assets/vmp.svg"
    }
  );

  constructor() { 
  }
}
