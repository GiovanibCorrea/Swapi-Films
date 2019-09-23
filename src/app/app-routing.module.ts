import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { FilmsListComponent } from './films-list/films-list.component'
import { FilmDetailsComponent } from './film-details/film-details.component'

// rotas
const routes: Routes = [
    // mapeia '/films' para o componente FilmListComponent
    {
      path: 'films',
      component: FilmsListComponent,
    },
    
    // mapeia '/film/:id' para o componente FilmDetailsComponent 
    {
      path: 'films/:id',
      component: FilmDetailsComponent,
    },

    // mapeia '/' para '/films' como a rota default
    {
      path: '',
      redirectTo: '/films',
      pathMatch: 'full'
    },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}