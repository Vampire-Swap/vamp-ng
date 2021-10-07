import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { BurnedTokensResponse } from '../utils/BurnedTokensResponse';
import { Token, TokenResponse } from '../utils/Token';
import { ConstantsService } from './constants.service';
import { GraphCacheService } from './graph-cache.service';
import { NumberFormatterService } from './number-formatter.service';

@Injectable({
  providedIn: 'root'
})
export class IntroService {

  private GET_LIQUIDITY_POOLS = gql`
    query GetLiquidityPools {
      token(id: "${this.constantsService.TRACKED_TOKEN}") {
        pairQuote(orderBy: reserveUSD, first: 10, orderDirection: desc) {
          reserveUSD
        }
        tokenDayData(orderBy: date, orderDirection: desc, first: 1) {
          priceUSD
        }
      }
    }
  `;

  constructor(
    private constantsService: ConstantsService,
    private apollo: Apollo,
    private graphCacheService: GraphCacheService,
    private http: HttpClient
  ) { }

  public getIntroInfo(): Observable<Token> {
    let tokenResponse: TokenResponse | null = this.graphCacheService.attemptToReadQueryFromCache(this.GET_LIQUIDITY_POOLS);

    if (tokenResponse !== null) {
      return new Observable<Token>((subscriber) => {
        subscriber.next(tokenResponse!.token)
        subscriber.complete();
      })
    }

    return this.apollo
      .watchQuery<TokenResponse>({ query: this.GET_LIQUIDITY_POOLS })
      .valueChanges
      .pipe(shareReplay(1))
      .pipe(map(
        (result) => {
          this.graphCacheService.writeQueryToCache(this.GET_LIQUIDITY_POOLS, result.data)
          return result.data.token
        }
      )
      )
  }

  public getBurnedTokens(): Observable<string> {
    return this.http.get<BurnedTokensResponse>(this.constantsService.FTM_SCAN_BASE_URL + "?" +
      "module=" + this.constantsService.FTM_SCAN_MODULES.ACCOUNT + "&" +
      "action=" + this.constantsService.FTM_SCAN_ACTIONS.TOKEN_BALANCE + "&" +
      "contractaddress=" + this.constantsService.TRACKED_TOKEN + "&" +
      "address=" + this.constantsService.ZERO_ADDRESS + "&" +
      "tag=latest" + "&" +
      "apikey=" + this.constantsService.FTM_SCAN_API_KEY
    )
    .pipe(shareReplay(1))
    .pipe(map(
      (result) => {
        return result.result
      }
    ))
  }

  public getTotalSupply(): Observable<string> {
    return this.http.get<BurnedTokensResponse>(this.constantsService.FTM_SCAN_BASE_URL + "?" +
      "module=" + this.constantsService.FTM_SCAN_MODULES.STATS + "&" +
      "action=" + this.constantsService.FTM_SCAN_ACTIONS.TOKEN_SUPPLY  + "&" +
      "contractaddress=" + this.constantsService.TRACKED_TOKEN + "&" +
      "apikey=" + this.constantsService.FTM_SCAN_API_KEY
    )
    .pipe(shareReplay(1))
    .pipe(map(
      (result) => {
        return result.result
      }
    ))
  }
}
