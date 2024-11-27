import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseBuyComponent } from './house-buy.component';

describe('HouseBuyComponent', () => {
  let component: HouseBuyComponent;
  let fixture: ComponentFixture<HouseBuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HouseBuyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouseBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
