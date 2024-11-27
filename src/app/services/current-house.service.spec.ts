import { TestBed } from '@angular/core/testing';

import { CurrentHouseService } from './current-house.service';

describe('CurrentHouseService', () => {
  let service: CurrentHouseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentHouseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
