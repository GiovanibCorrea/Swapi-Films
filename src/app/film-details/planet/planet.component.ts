import { Component, OnInit, OnDestroy, Input } from '@angular/core'
import { ActivatedRoute, Router, Params } from '@angular/router'
import { PlanetService } from '../../services/planet.service'
import { iif } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss']
})
export class PlanetComponent implements OnInit {

  @Input() url: string;
  planet: any;

  constructor(private planetService: PlanetService) { }

  ngOnInit() {
    console.log(this.url);
    this.planet = this.planetService.getPlanet(this.url);
  }

}
