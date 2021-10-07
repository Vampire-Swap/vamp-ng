import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { DocumentNode } from 'graphql';

@Injectable({
  providedIn: 'root'
})
export class GraphCacheService {

  constructor(private apollo: Apollo) { }

  public writeQueryToCache(query: DocumentNode, object: any): void {
    this.apollo.client.writeQuery({
      query: query,
      data: object
    })
  }

  public attemptToReadQueryFromCache<T>(query: DocumentNode) {
    return this.apollo.client.readQuery<T>({
      query: query,
    })
  }
}
