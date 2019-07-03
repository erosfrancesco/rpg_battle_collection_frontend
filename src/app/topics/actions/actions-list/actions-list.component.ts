import { Component, OnInit } from '@angular/core';

import { AppComponent } from '../../../app.component'


@Component({
  selector: 'app-actions-list',
  templateUrl: './actions-list.component.html',
  styleUrls: ['./actions-list.component.css']
})
export class ActionsListComponent implements OnInit {

  	service: any

	constructor(private appComponent: AppComponent) {
		appComponent.navTitle = "Actions"
	}

	ngOnInit() {
	}

}
