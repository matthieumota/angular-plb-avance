import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display 4 random houses', waitForAsync(() => {
    expect(component.houses.length).toBe(4)
    const compiled = fixture.nativeElement as HTMLElement
    expect(compiled.querySelectorAll('h3').length).toBe(4)
    const service = TestBed.inject(HousingService)

    service.all().subscribe(houses => {
      expect(component.houses).not.toBe(houses.slice(0, 4))
    })
  }));
});
