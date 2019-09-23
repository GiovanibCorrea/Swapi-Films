import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';

import { FilmsListComponent } from './films-list/films-list.component';
import { FilmDetailsComponent } from './film-details/film-details.component'
import { FilmService } from './services/film.service';
import { PersonService } from './services/person.service';
import { PersonComponent } from './film-details/person/person.component';
import { PlanetComponent } from './film-details/planet/planet.component';
import { PlanetService } from './services/planet.service';

@NgModule({
  declarations: [
    AppComponent, 
    FilmsListComponent, 
    FilmDetailsComponent, 
    PersonComponent, 
    PlanetComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    AppRoutingModule
  ],
  providers: [
    FilmService,
    PersonService,
    PlanetService,
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule { }
