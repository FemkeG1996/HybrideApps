import { TestBed } from '@angular/core/testing';

import { FavoService } from './favo.service';

describe('FavoService', () => {
  let service: FavoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
