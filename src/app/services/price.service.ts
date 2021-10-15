import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { DocumentNode } from 'graphql';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { GraphCacheService } from './graph-cache.service';
import { Token, TokenResponse } from '../utils/Token';

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  constructor(private apollo: Apollo, private graphCacheService: GraphCacheService) { }

  private queryGraph(query: DocumentNode): Observable<Token> {
    return this.apollo
      .watchQuery<TokenResponse>({ query: query })
      .valueChanges
      .pipe(map(
        (result) => {
          return result.data.token
        }
      )
      )
  }

  public getPriceFromSpookySwap(tokenAddress: string): Observable<Token> {
    const GET_PRICE = gql`
      query GetPrice_SPOOKY {
        token(id: "${tokenAddress}") {
          tokenDayData(orderBy: date, orderDirection: desc, first: 1) {
            priceUSD
          }
        }
      }
    `;

    return this.queryGraph(GET_PRICE);
  }
}
