import { TestBed } from '@angular/core/testing';

import { ExcerisesService } from './excerises.service';

describe('ExcerisesService', () => {
  let service: ExcerisesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExcerisesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
