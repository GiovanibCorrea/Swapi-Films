import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Observable, of } from 'rxjs'

import { Film } from '../interfaces/film'
import { Movie } from '../movie/movie';
import {IMovie} from '../imovie';

@Injectable()
export class FilmService {
  private baseUrl: string = 'https://swapi.co/api'

  constructor(private http: HttpClient) {}

  getAll(): Observable<Film[]> {
    let films$ = this.http
      .get(`${this.baseUrl}/films/`, { headers: this.getHeaders() })
      .pipe(map((data: any) => data.results));         
    return films$
  }

  private getHeaders() {
    // get dos headers para servir o tipo json
    let headers = new HttpHeaders()
    headers.append('Accept', 'application/json');
    return headers
  }
  
  get(id: Number): Observable<Film> {
    let film$ = this.http
      .get(`${this.baseUrl}/films/${id}`, { headers: this.getHeaders() })
      .pipe(map((data: any) => data.results));            
    return film$
  }

  getMovie(id: number) {
    const movie = new Movie();
    this.http.get<IMovie>('https://swapi.co/api/films/' + id).subscribe(data => {
      movie.title = data.title;
      movie.description = data.opening_crawl;
      movie.director = data.director;
      movie.producer = data.producer;
      movie.releaseYear = data.release_date;
      movie.characters = data.characters;
    });
    return  movie;
  }

}

function toFilm(r: any): Film {  
  let film = <Film>{
    id: extractId(r),
    url: r.url,
    title: r.title,
    episode_id: r.episode_id,
    opening_crawl: r.opening_crawl,
    director: r.director,
    producer: r.producer,
    release_date: r.release_date,
    characters: r.characters,
    /*planets: string;
    starships: string;
    vehicles: string;
    species: string;*/
    created: r.created,
    edited: r.edited    
  }  
  return film
}

// extrai o id da url da api
function extractId(FilmData: any) {
  let extractedId = FilmData.url
    .replace('https://swapi.co/api/films/', '')
    .replace('/', '')
  return parseInt(extractedId)
}

function mapFilm(response: Response): Film {  
  return toFilm(response.json())
}