import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DsfrHeaderModule } from '@edugouvfr/ngx-dsfr';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, CartItem } from './stores/cart.reducer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, DsfrHeaderModule, AsyncPipe, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Immobiliare';
  cart$!: Observable<CartItem[]>

  constructor(private store: Store<AppState>) {
    this.cart$ = this.store.select('cart')
  }
}
