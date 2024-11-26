import { Component, NgZone } from '@angular/core';
import { House } from '../../models/house';
import { HousingService } from '../../services/housing.service';
import { SharedModule } from '../../modules/shared/shared.module';

@Component({
  selector: 'app-houses',
  imports: [SharedModule],
  templateUrl: './houses.component.html',
  styleUrl: './houses.component.scss'
})
export class HousesComponent {
  houses!: House[];

  constructor(private housing: HousingService, private zone: NgZone) {}

  ngOnInit(): void {
    this.housing.all().subscribe(houses => this.houses = houses)

    this.zone.runOutsideAngular(() => {
      window.addEventListener('scroll', (event) => {
        if (window.scrollY + window.innerHeight > document.body.scrollHeight) {
          console.log(event)
          this.zone.run(() => this.houses = this.houses.concat(this.houses))
        }
      })
    })
  }
}
