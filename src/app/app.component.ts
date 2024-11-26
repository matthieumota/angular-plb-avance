import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DsfrHeaderModule } from '@edugouvfr/ngx-dsfr';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, DsfrHeaderModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Immobiliare';
}
