import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Pool } from 'src/app/components/pool-card/Pool';
import { Web3Service } from 'src/app/services/web3.service';

@Component({
  selector: 'pools',
  templateUrl: './pools.component.html',
  styleUrls: ['./pools.component.css']
})
export class PoolsComponent implements OnInit {

  public pools: Array<Pool> = new Array<Pool>();

  private loaded: boolean = false;

  constructor(private web3: Web3Service) {
  }

  ngOnInit(): void {
    this.web3.ACCOUNT.subscribe(() => {
      this.loadPools();
    })
  }

  private loadPools() {
    if (this.loaded) {
      return
    }

    this.web3.loadPools().then(() => {
      this.web3.LOADED_BLOOD_POOLS.subscribe(pool => {
        this.pools.push(pool)
      })
      this.loaded = true;
    })
  }

}
