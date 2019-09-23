import { Injectable } from '@angular/core';
import { Movie } from '../movie/movie';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {IMovie} from '../imovie';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {
  movies: Array<Movie>;
  moviesUrl: any;

  constructor(private http: HttpClient) {
  }

  public getMoviesData(): Observable<any> {
    return this.http.get('https://swapi.co/api/films/');
  }

  public getMovies() {
    const moviesData: Array<Movie> = [];

    function getId(element: any): number {
      const chunks = element.url.split('/');
      return (chunks[chunks.length - 2]);
    }

    this.getMoviesData().subscribe(data => {
      data.results.forEach(element => {
        const movie = new Movie();
        movie.title = element.title;
        movie.id = getId(element);
        moviesData.push(movie);
      });
    });
    return moviesData;
  }

  public getMovie(id: number) {
    const movie = new Movie();
    this.http.get<IMovie>('https://swapi.co/api/films/' + id).subscribe(data => {
      movie.title = data.title;
      movie.description = data.opening_crawl;
      movie.director = data.director;
      movie.producer = data.producer;
      movie.releaseYear = data.release_date;
    });
    return  movie;
  }
}


