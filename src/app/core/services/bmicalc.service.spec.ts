import { TestBed } from '@angular/core/testing';

import { BmicalcService } from './bmicalc.service';

describe('BmicalcService', () => {
  let service: BmicalcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BmicalcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
