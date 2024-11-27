import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, CartItem } from '../../stores/cart.reducer';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [AsyncPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cart$!: Observable<CartItem[]>

  constructor(private store: Store<AppState>) {
    this.cart$ = this.store.select('cart')
  }
}
