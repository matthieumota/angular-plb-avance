import { Component, OnInit } from '@angular/core';
import { HousingService } from '../../services/housing.service';
import { FakeHousingService } from '../../services/fake-housing.service';
import { House } from '../../models/house';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [],
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
    this.housing.all().subscribe(houses => {
      this.houses = houses
    })
  }
}
