import { TestBed } from '@angular/core/testing';

import { DietplannerService } from './dietplanner.service';

describe('DietplannerService', () => {
  let service: DietplannerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DietplannerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
