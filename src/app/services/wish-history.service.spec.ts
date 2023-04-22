import { TestBed } from '@angular/core/testing';

import { WishHistoryService } from './wish-history.service';

describe('DashboardService', () => {
  let service: WishHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WishHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
