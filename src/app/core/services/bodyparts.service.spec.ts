import { TestBed } from '@angular/core/testing';

import { BodypartsService } from './bodyparts.service';

describe('BodypartsService', () => {
  let service: BodypartsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BodypartsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
