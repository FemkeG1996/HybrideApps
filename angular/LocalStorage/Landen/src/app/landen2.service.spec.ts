import { TestBed } from '@angular/core/testing';

import { Landen2Service } from './landen2.service';

describe('Landen2Service', () => {
  let service: Landen2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Landen2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
