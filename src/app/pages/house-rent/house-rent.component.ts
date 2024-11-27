import { Component, inject, OnInit } from '@angular/core';
import { CurrentHouseService } from '../../services/current-house.service';
import { House } from '../../models/house';

@Component({
  selector: 'app-house-rent',
  imports: [],
  templateUrl: './house-rent.component.html',
  styleUrl: './house-rent.component.scss'
})
export class HouseRentComponent implements OnInit {
  house!: House | null
  private current = inject(CurrentHouseService)

  ngOnInit(): void {
    this.current.house.subscribe(house => this.house = house)
  }
}
