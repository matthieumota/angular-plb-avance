import { Component } from '@angular/core';
import { House } from '../../models/house';
import { HousingService } from '../../services/housing.service';

@Component({
  selector: 'app-houses',
  imports: [],
  templateUrl: './houses.component.html',
  styleUrl: './houses.component.scss'
})
export class HousesComponent {
  houses!: House[];

  constructor(private housing: HousingService) {}

  ngOnInit(): void {
    this.housing.all().subscribe(houses => this.houses = houses)
  }
}
