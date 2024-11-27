import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseComponent } from './house.component';
import { provideRouter } from '@angular/router';
import { routes } from '../../app.routes';
import { HousingService } from '../../services/housing.service';
import { FakeHousingService } from '../../services/fake-housing.service';

describe('HouseComponent', () => {
  let component: HouseComponent;
  let fixture: ComponentFixture<HouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HouseComponent],
      providers: [
        provideRouter(routes),
        { provide: HousingService, useExisting: FakeHousingService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
