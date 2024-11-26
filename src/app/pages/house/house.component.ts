import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../../services/housing.service';
import { switchMap } from 'rxjs';
import { House } from '../../models/house';

@Component({
  selector: 'app-house',
  imports: [],
  templateUrl: './house.component.html',
  styleUrl: './house.component.scss'
})
export class HouseComponent implements OnInit {
  house!: House;

  constructor(
    private route: ActivatedRoute,
    private housing: HousingService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(paramMap => this.housing.get(parseInt(paramMap.get('id') || '')))
    ).subscribe(house => this.house = house)
  }
}
