import { Component, OnInit, Input } from '@angular/core';
import { ObjectsService } from '../objects.service';
import { BattleObject } from '../objects.model';


@Component({
  selector: 'app-object-item',
  templateUrl: './object-item.component.html',
  styleUrls: ['./object-item.component.css']
})
export class ObjectItemComponent implements OnInit {

  constructor(public service: ObjectsService) { }

  ngOnInit() {
  }

  @Input() battleobject: BattleObject
}
