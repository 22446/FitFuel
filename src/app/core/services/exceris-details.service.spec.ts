import { TestBed } from '@angular/core/testing';

import { ExcerisDetailsService } from './exceris-details.service';

describe('ExcerisDetailsService', () => {
  let service: ExcerisDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExcerisDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
