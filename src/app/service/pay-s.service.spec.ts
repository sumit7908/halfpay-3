import { TestBed } from '@angular/core/testing';

import { PaySService } from './pay-s.service';

describe('PaySService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaySService = TestBed.get(PaySService);
    expect(service).toBeTruthy();
  });
});
