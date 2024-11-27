import { Component, inject } from '@angular/core';
import { House } from '../../models/house';
import { CurrentHouseService } from '../../services/current-house.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-house-buy',
  imports: [AsyncPipe],
  templateUrl: './house-buy.component.html',
  styleUrl: './house-buy.component.scss'
})
export class HouseBuyComponent {
  $house!: Observable<House | null>
  private current = inject(CurrentHouseService)

  ngOnInit(): void {
    this.$house = this.current.house.asObservable()
  }
}
