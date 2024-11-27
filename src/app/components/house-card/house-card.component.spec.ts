import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';

import { HouseCardComponent } from './house-card.component';
import { FakeHousingService } from '../../services/fake-housing.service';
import { provideRouter } from '@angular/router';
import { routes } from '../../app.routes';

describe('HouseCardComponent', () => {
  let component: HouseCardComponent;
  let fixture: ComponentFixture<HouseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HouseCardComponent],
      providers: [provideRouter(routes)]
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

  it('should console log', fakeAsync(() => {
    spyOn(console, 'log');
    fixture.componentRef.setInput('house', { id: 1, name: 'Fiorella' });
    fixture.detectChanges();
    tick(1000);

    expect(console.log).toHaveBeenCalledOnceWith('time')
  }))
});
