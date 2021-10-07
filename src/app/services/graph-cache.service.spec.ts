import { TestBed } from '@angular/core/testing';

import { GraphCacheService } from './graph-cache.service';

describe('GraphCacheService', () => {
  let service: GraphCacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraphCacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
