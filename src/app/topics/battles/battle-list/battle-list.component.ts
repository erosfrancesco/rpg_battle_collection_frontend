import { Component, OnInit } from '@angular/core';

import { AppComponent } from '../../../app.component'


@Component({
  selector: 'app-battle-list',
  templateUrl: './battle-list.component.html',
  styleUrls: ['./battle-list.component.css']
})
export class BattleListComponent implements OnInit {

  service: any
  
  constructor(private appComponent: AppComponent) { 
    appComponent.navTitle = "Battle"
  }

  ngOnInit() {
  }

}
