import { Component, OnInit } from '@angular/core';

import { AppComponent } from '../../../app.component'
//import { Action } from '../../../services/action.model'


@Component({
  selector: 'app-actions-list',
  templateUrl: './actions-list.component.html',
  styleUrls: ['./actions-list.component.css']
})
export class ActionsListComponent implements OnInit {

  	service: any
  	//newItem: Action = new Action()

	constructor(private appComponent: AppComponent) {
		appComponent.navTitle = "Actions"
	}

	ngOnInit() {
	}

}
