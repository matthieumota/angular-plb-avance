import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HousingService } from '../../services/housing.service';
import { delay, switchMap } from 'rxjs';
import { House } from '../../models/house';
import { TaxPipe } from '../../pipes/tax.pipe';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-house',
  imports: [TaxPipe, CurrencyPipe, RouterLink],
  templateUrl: './house.component.html',
  styleUrl: './house.component.scss'
})
export class HouseComponent implements OnInit {
  house!: House;
  loading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private housing: HousingService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(paramMap => {
        this.loading = true
        return this.housing.get(parseInt(paramMap.get('id') || ''))
      }),
      delay(500)
    ).subscribe(house => {
      this.house = house
      this.loading = false
    })
  }
}
