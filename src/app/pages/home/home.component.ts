import { Component, OnInit } from '@angular/core';
import { HousingService } from '../../services/housing.service';
import { FakeHousingService } from '../../services/fake-housing.service';
import { House } from '../../models/house';
import { map } from 'rxjs';
import { HouseCardComponent } from "../../components/house-card/house-card.component";

@Component({
  selector: 'app-home',
  imports: [HouseCardComponent],
  providers: [
    // { provide: HousingService, useExisting: FakeHousingService }
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  houses!: House[];

  constructor(private housing: HousingService) {}

  ngOnInit(): void {
    this.housing.all().pipe(
      map(houses => [...houses].sort(() => Math.random() - 0.5).slice(0, 4)),
    ).subscribe(houses => {
      this.houses = houses
    })
  }
}
