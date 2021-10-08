import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import Web3 from 'web3';
import { ConstantsService } from './constants.service';

@Injectable({
  providedIn: 'root'
})
export class Web3Service {

  private window: any = <any>window;
  public ACCOUNT: Subject<string> = new Subject();
  public web3: Web3 = new Web3();

  constructor(private constantsService: ConstantsService) { }

  public async connect() {
    if (this.window.ethereum) {
      this.web3 = new Web3(this.window.ethereum);
      const accounts: Array<string> = await this.web3.eth.requestAccounts();

      const chainId = await this.web3.eth.getChainId();
      this.checkChainId(chainId).then(() => this.ACCOUNT.next(accounts[0]))
    }
  }

  private async checkChainId(chainId: number): Promise<void> {
    if (chainId !== 250 && chainId !== 4002) {
      try {
        await (<any>this.web3.currentProvider).request({
          method: 'wallet_switchEthereumChain',
          params: [{chainId: this.constantsService.FANTOM_CHAIN_DETAILS.chainId}]
        })
        return Promise.resolve();
      }
      catch (switchError) {
        if ((<any>switchError).code === 4902) {
          try {
            await (<any>this.web3.currentProvider).request({
              method: 'wallet_addEthereumChain',
              params: [this.constantsService.FANTOM_CHAIN_DETAILS]
            })
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
