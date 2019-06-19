import { Component, OnInit } from '@angular/core';
import { Animation } from '../../../services/animation.model'
import { AppComponent } from '../../../app.component'
import { ActivatedRoute } from '@angular/router'

import 'brace';
import 'brace/mode/javascript';
import 'brace/theme/ambiance';

@Component({
  selector: 'app-animations-detail',
  templateUrl: './animations-detail.component.html',
  styleUrls: ['./animations-detail.component.css']
})
export class AnimationsDetailComponent implements OnInit {

  	constructor(private route: ActivatedRoute, private appComponent: AppComponent) { 
		appComponent.fabButtonIcon = "save"
		appComponent.fabButtonAction = () => this.updateItemChanges();
		appComponent.showSpinner = true
	}

	private sub: any;
	animation: Animation
	originalAction: Animation
	service = this.appComponent.animationsService

	/*
	*/
	fetchItemById(id, onFetched: Function) {
		this.service.getItemsById([id], (err, [item]) => {
			if (err) {
				console.error(err)
				return
			}

			if (!item) {
				console.error("Not item found: ", id)
				return
			}

			onFetched(item);
		})
	}

	updateItemChanges() {
		const updates = {}
		this.service.updateItemById(this.animation.id, this.animation, animation => console.log())
	}

	/*
	*/
	ngOnInit() {
		this.sub = this.route.params.subscribe(params => this.fetchItemById(params['id'], animation => {
			this.animation = animation.deserialize(animation)
			this.originalAction = animation
			this.appComponent.navTitle = animation.label
			
			setTimeout(() => {
				this.appComponent.showSpinner = false
			}, 200);
		}) );
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}


	/*
	*/
	checkItemProperties() :boolean {
		return Boolean(this.animation && this.animation.properties)
	}

}
