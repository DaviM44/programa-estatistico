import { TestBed } from '@angular/core/testing';

import { CondService } from './cond.service';

describe('CondService', () => {
  let service: CondService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CondService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
