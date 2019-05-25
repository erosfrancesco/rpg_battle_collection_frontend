import { Component, OnInit } from '@angular/core';
import { Sprite } from '../services/sprite.model'
import { AppComponent } from '../app.component'


@Component({
  selector: 'app-sprite-list',
  templateUrl: './sprite-list.component.html',
  styleUrls: ['./sprite-list.component.css']
})
export class SpriteListComponent implements OnInit {

	items :[Sprite]

	service = this.appComponent.spriteService

	constructor(private appComponent: AppComponent) { 
		appComponent.navTitle = "Sprites"
		appComponent.fabButtonIcon = ""
		appComponent.showSpinner = true
		this.service.getItems((err, items) => {
			if (err) {
				console.error(err)
				return
			}
			this.items = items
			appComponent.showSpinner = false
			appComponent.fabButtonIcon = "add"
		});
	}

	ngOnInit() {
	}

}
