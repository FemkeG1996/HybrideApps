import { TestBed } from '@angular/core/testing';

import { HondenService } from './honden.service';

describe('HondenService', () => {
  let service: HondenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HondenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
