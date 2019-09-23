import { Component, OnInit } from '@angular/core'
import { Film } from '../interfaces/film'
import { FilmService } from '../services/film.service'

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list-component.html',
  styleUrls: ['./films-list.component.scss'],
})
export class FilmsListComponent implements OnInit {
  films: Film[] = []
  selectedFilm: Film

  constructor(private filmService: FilmService) {}

  ngOnInit() {    
    this.filmService
        .getAll()
        .subscribe(f => this.films = f);        
  }

  selectFilm(film) {
    this.selectedFilm = film
  }  
}
