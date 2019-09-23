import { Component, OnInit, OnDestroy, Input } from '@angular/core'
import { ActivatedRoute, Router, Params } from '@angular/router'
import { PersonService } from '../../services/person.service'
import { iif } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  @Input() url: string;
  person: any;

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.person = this.personService.getPerson(this.url);
  }

}
