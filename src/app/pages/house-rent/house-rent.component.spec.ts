import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseRentComponent } from './house-rent.component';

describe('HouseRentComponent', () => {
  let component: HouseRentComponent;
  let fixture: ComponentFixture<HouseRentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HouseRentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouseRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
