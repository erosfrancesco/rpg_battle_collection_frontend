import { Component, OnInit, Input } from '@angular/core';
import { Resource } from '../../resource.model';
import { ActionsService } from '../actions.service';
@Component({
  selector: 'app-action-item',
  templateUrl: './action-item.component.html',
  styleUrls: ['./action-item.component.css']
})
export class ActionItemComponent implements OnInit {

  constructor(public service: ActionsService) { }

  @Input() action: Resource

  ngOnInit() {
  }
}
