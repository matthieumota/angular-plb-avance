import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousesComponent } from './houses.component';
import { HousingService } from '../../services/housing.service';
import { FakeHousingService } from '../../services/fake-housing.service';
import { provideRouter } from '@angular/router';
import { routes } from '../../app.routes';

describe('HousesComponent', () => {
  let component: HousesComponent;
  let fixture: ComponentFixture<HousesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HousesComponent],
      providers: [
        provideRouter(routes),
        { provide: HousingService, useExisting: FakeHousingService }
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(HousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display houses', () => {
    expect(component.houses.length).toBe(5)
    const compiled = fixture.nativeElement as HTMLElement
    expect(compiled.querySelectorAll('h3').length).toBe(5)
    const names = Array.from(compiled.querySelectorAll('h3')).map(el => el.textContent)
    expect(names).toEqual(['Charming Studio', 'Modern Loft', 'Cozy Cottage', 'Luxury Villa', 'Seaside Apartment'])
  });
});
