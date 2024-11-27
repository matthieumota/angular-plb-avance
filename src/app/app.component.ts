import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DsfrHeaderModule } from '@edugouvfr/ngx-dsfr';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, DsfrHeaderModule, AsyncPipe, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Immobiliare';
  cart$!: Observable<any[]>

  constructor(private store: Store<{ cart: any[] }>) {
    this.cart$ = this.store.select('cart')
  }
}
