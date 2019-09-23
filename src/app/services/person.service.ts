import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Observable, of } from 'rxjs'

import { iPerson } from '../interfaces/person'
import { Person } from '../film-details/person/person';

@Injectable()
export class PersonService {
  private baseUrl: string = 'https://swapi.co/api'

  constructor(private http: HttpClient) {}

  private getHeaders() {
    // get dos headers para servir o tipo json
    let headers = new HttpHeaders()
    headers.append('Accept', 'application/json');
    return headers
  }
  
  getPerson(url: string) {
    const person = new Person();
    this.http.get<iPerson>(url).subscribe(data => {
      person.name = data.name;
      person.gender = data.gender;
      person.homeworld = data.homeworld;
      person.birth_year = data.birth_year;
    });
    return  person;
  }

}