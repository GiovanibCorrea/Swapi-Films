import { Component, OnInit, OnDestroy, Input } from '@angular/core'
import { Film } from '../interfaces/film'
import { ActivatedRoute, Router, Params } from '@angular/router'
import { FilmService } from '../services/film.service'
import { iif } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.scss'],
})
export class FilmDetailsComponent implements OnInit, OnDestroy {
  
  @Input() url: string;

  sub: any;
  movie: any;

  constructor(
    private route: ActivatedRoute,
    private filmService: FilmService,
    private router: Router
  ) {}

  ngOnInit() {    
    this.route.paramMap.subscribe((param: Params) => {
      // tslint:disable-next-line: radix
      const id = this.extractId(this.url)
      this.movie = this.filmService.getMovie(id);
    });

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

  gotoFilmsList() {
    window.history.back();
  }

  extractId(url: string) {
    let extractedId = url
      .replace('https://swapi.co/api/films/', '')
      .replace('/', '')
    return parseInt(extractedId)
  }

  @Input() film: Film
}