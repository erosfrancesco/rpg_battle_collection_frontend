import { Component, OnInit } from '@angular/core';

import { AppComponent } from '../../../app.component'


@Component({
  selector: 'app-animations-list',
  templateUrl: './animations-list.component.html',
  styleUrls: ['./animations-list.component.css']
})
export class AnimationsListComponent implements OnInit {

  	service :any

	constructor(private appComponent: AppComponent) { 
		appComponent.navTitle = "Animations"
	}

	ngOnInit() {
	}

}
