import { TestBed } from '@angular/core/testing';

import { ApiDataSearchService } from './api-data-search.service';

describe('ApiDataSearchService', () => {
  let service: ApiDataSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiDataSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
