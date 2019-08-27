import { Component, OnInit, Input } from '@angular/core';

import { ActorsService } from '../actors.service';
import { Resource } from '../../resource.model';


@Component({
  selector: 'app-actor-item',
  templateUrl: './actor-item.component.html',
  styleUrls: ['./actor-item.component.css']
})
export class ActorItemComponent implements OnInit {

  constructor(public service: ActorsService) { }

  @Input() actor: Resource

  ngOnInit() {
  }
}
