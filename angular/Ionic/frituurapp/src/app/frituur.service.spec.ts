import { TestBed } from '@angular/core/testing';

import { FrituurService } from './frituur.service';

describe('FrituurService', () => {
  let service: FrituurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrituurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
