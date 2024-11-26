import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HouseCardComponent } from './house-card.component';
import { FakeHousingService } from '../../services/fake-housing.service';

describe('HouseCardComponent', () => {
  let component: HouseCardComponent;
  let fixture: ComponentFixture<HouseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HouseCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouseCardComponent);
    component = fixture.componentInstance;
  });

  it('should create', waitForAsync(() => {
    TestBed.inject(FakeHousingService).all().subscribe(houses => {
      fixture.componentRef.setInput('house', houses[0]);
      fixture.detectChanges();
      expect(component.house.name).toBe('Charming Studio');
    });
  }));
});
