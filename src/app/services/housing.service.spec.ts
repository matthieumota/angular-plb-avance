import { TestBed, waitForAsync } from '@angular/core/testing';

import { HousingService } from './housing.service';
import { provideHttpClient } from '@angular/common/http';

describe('HousingService', () => {
  let service: HousingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()]
    });
    service = TestBed.inject(HousingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Test de code asynchrone (promesse, observable...)
  it('should be returned houses', waitForAsync(() => {
    service.all().subscribe(houses => expect(houses.length).toBe(9))
  }));
});
