import { TestBed } from '@angular/core/testing';

import { LApiService } from './l-api.service';

describe('LApiService', () => {
  let service: LApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
