import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HousingService } from '../../services/housing.service';
import { FakeHousingService } from '../../services/fake-housing.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [
        { provide: HousingService, useExisting: FakeHousingService }
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges()
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display houses', () => {
    expect(component.houses.length).toBe(5)
    const compiled = fixture.nativeElement as HTMLElement
    expect(compiled.querySelectorAll('h2').length).toBe(5)
  });
});
