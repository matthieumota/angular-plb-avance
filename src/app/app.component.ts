import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DsfrHeaderModule } from '@edugouvfr/ngx-dsfr';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, quantity, total } from './stores/cart.reducer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, DsfrHeaderModule, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Immobiliare';
  quantity$!: Observable<number>
  total$!: Observable<number>

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.quantity$ = this.store.select(quantity)
    this.total$ = this.store.select(total)
  }
}
