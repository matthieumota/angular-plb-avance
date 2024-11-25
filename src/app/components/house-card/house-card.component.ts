import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { House } from '../../models/house';

@Component({
  selector: 'app-house-card',
  imports: [],
  templateUrl: './house-card.component.html',
  styleUrl: './house-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HouseCardComponent {
  @Input() house!: House
  name!: string

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.name = this.house.name
  }

  random() {
    return Math.random()
  }

  ngDoCheck() {
    if (this.name !== this.house.name) {
      this.cd.markForCheck()
      console.log(`CHANGE DETECTION POUR ${this.house.id}`)
      this.name = this.house.name
    }
  }
}
