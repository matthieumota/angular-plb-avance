import { TestBed, waitForAsync } from '@angular/core/testing';

import { FakeHousingService } from './fake-housing.service';

describe('FakeHousingService', () => {
  let service: FakeHousingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeHousingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be returned houses', waitForAsync(() => {
    service.all().subscribe(houses => expect(houses.length).toBe(5))
  }));
});
