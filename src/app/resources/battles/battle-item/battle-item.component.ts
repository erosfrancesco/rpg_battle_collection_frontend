import { Component, OnInit, Input } from '@angular/core';
import { BattlesService } from '../battles.service';
import { Battle } from '../battles.model';


@Component({
  selector: 'app-battle-item',
  templateUrl: './battle-item.component.html',
  styleUrls: ['./battle-item.component.css']
})
export class BattleItemComponent implements OnInit {


  constructor(public service: BattlesService) { }

  ngOnInit() {
  }

  @Input() battle: Battle


}
