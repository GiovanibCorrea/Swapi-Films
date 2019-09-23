import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Observable, of } from 'rxjs'

import { iPlanet } from '../interfaces/planet'
import { Planet } from '../film-details/planet/planet';

@Injectable()
export class PlanetService {

  constructor(private http: HttpClient) {}

  private getHeaders() {
    // get dos headers para servir o tipo json
    let headers = new HttpHeaders()
    headers.append('Accept', 'application/json');
    return headers
  }
  
  getPlanet(url: string) {
    const planet = new Planet();
    this.http.get<iPlanet>(url).subscribe(data => {
      planet.name = data.name;
    });
    return  planet;
  }

}