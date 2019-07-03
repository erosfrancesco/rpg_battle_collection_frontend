import { Component, OnInit, Input } from '@angular/core';
import { Action } from "../../../services/action.model"
@Component({
  selector: 'app-action-item',
  templateUrl: './action-item.component.html',
  styleUrls: ['./action-item.component.css']
})
export class ActionItemComponent implements OnInit {

  constructor() { }

  @Input() action: Action

  ngOnInit() {
  }
}
