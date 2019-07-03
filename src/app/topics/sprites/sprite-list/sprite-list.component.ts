import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../../app.component'


@Component({
  selector: 'app-sprite-list',
  templateUrl: './sprite-list.component.html',
  styleUrls: ['./sprite-list.component.css']
})
export class SpriteListComponent implements OnInit {

	service :any

	constructor(private appComponent: AppComponent) { 
		appComponent.navTitle = "Sprites"
	}

	ngOnInit() {
	}
}
