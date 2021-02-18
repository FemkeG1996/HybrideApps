import { TestBed } from '@angular/core/testing';

import { ReceptenService } from './recepten.service';

describe('ReceptenService', () => {
  let service: ReceptenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReceptenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
