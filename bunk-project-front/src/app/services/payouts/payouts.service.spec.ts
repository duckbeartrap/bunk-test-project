import { TestBed } from '@angular/core/testing';

import { PayoutsService } from './payouts.service';

describe('CalculateService', () => {
  let service: PayoutsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PayoutsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
