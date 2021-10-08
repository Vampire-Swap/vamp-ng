import { Injectable } from '@angular/core';

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

  constructor() { }
}
