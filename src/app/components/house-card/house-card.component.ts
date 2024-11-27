import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { House } from '../../models/house';
import { DsfrButtonModule, DsfrCardModule } from '@edugouvfr/ngx-dsfr';
import { CurrencyPipe } from '@angular/common';
import { TestPipe } from '../../pipes/test.pipe';
import { TaxPipe } from '../../pipes/tax.pipe';
import { Store } from '@ngrx/store';
import { add } from '../../stores/cart.reducer';

@Component({
  selector: 'app-house-card',
  imports: [DsfrButtonModule, DsfrCardModule, CurrencyPipe, TestPipe, TaxPipe],
  templateUrl: './house-card.component.html',
  styleUrl: './house-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HouseCardComponent {
  @Input() house!: House;
  name!: string;

  constructor(
    private cd: ChangeDetectorRef,
    private store: Store
  ) {}

  ngOnInit() {
    this.name = this.house.name;

    setTimeout(() => console.log('time'), 1000);
  }

  addToCart() {
    this.store.dispatch(add({
      name: this.house.name,
      price: this.house.price,
      quantity: 1
    }))
  }

  random() {
    return Math.random();
  }

  ngDoCheck() {
    if (this.name !== this.house.name) {
      this.cd.markForCheck();
      console.log(`CHANGE DETECTION POUR ${this.house.id}`);
      this.name = this.house.name;
    }
  }
}
