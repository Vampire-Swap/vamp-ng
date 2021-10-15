import {NgModule} from '@angular/core';
import {APOLLO_OPTIONS} from 'apollo-angular';
import {ApolloClientOptions, InMemoryCache} from '@apollo/client/core';
import {HttpLink} from 'apollo-angular/http';

const SPOOKY_SWAP = 'https://api.thegraph.com/subgraphs/name/eerieeight/spookyswap'; // <-- add the URL of the GraphQL server here

function operationFilter(operationName: string): string {
  if (operationName.includes("SPOOKY")) {
    return SPOOKY_SWAP;
  }

  return ''
}

export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  return {
    link: httpLink.create({
      uri(operation) {
        return operationFilter(operation.operationName)
      }
    }),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
