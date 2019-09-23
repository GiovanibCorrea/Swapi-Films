import { Component } from '@angular/core';
import { FilmService } from './services/film.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [FilmService]
})
export class AppComponent {
  title = 'Star WarsSome';
}
