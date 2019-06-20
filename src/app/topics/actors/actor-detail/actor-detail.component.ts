import { Component, OnInit } from '@angular/core';
import { Actor } from '../../../services/actor.model'
import { AppComponent } from '../../../app.component'
import { ActivatedRoute } from '@angular/router'

import 'brace';
import 'brace/mode/javascript';
import 'brace/theme/ambiance';


@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.css']
})
export class ActorDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private appComponent: AppComponent) { 
		appComponent.fabButtonIcon = "save"
		appComponent.fabButtonAction = () => this.updateItemChanges();
		appComponent.showSpinner = true
	}

	private sub: any;
	actor: Actor
	service = this.appComponent.actorService

	/*
	*/
	fetchItemById(id, onFetched: Function) {
		this.service.getItemsById([id], (err, [item]) => {
			if (err) {
				console.error(err)
				return
			}

			if (!item) {
				console.error("Item not found: ", id)
				return
			}

			onFetched(item);
		})
	}

	updateItemChanges() {
		const updates = {}
		this.service.updateItemById(this.actor.id, this.actor, (err, actor) => { this.actor = actor })
	}

	/*
	*/
	ngOnInit() {
		this.sub = this.route.params.subscribe(params => this.fetchItemById(params['id'], actor => {
			this.actor = actor.deserialize(actor)
			this.actor.properties.canBeAlly = this.actor.properties.canBeAlly || false
			this.actor.properties.canBeEnemy = this.actor.properties.canBeEnemy || false
			this.appComponent.navTitle = actor.label
			
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
		return Boolean(this.actor && this.actor.properties)
	}

	onCheckboxChanged(e, options) {
		console.log(e, options)
	}

}
