import { Component, OnInit } from '@angular/core';
import { BattleObjects } from '../../../services/battleobjects.model'
import { AppComponent } from '../../../app.component'
import { ActivatedRoute } from '@angular/router'

import 'brace';
import 'brace/mode/javascript';
import 'brace/theme/ambiance';

@Component({
  selector: 'app-battleobjects-detail',
  templateUrl: './battleobjects-detail.component.html',
  styleUrls: ['./battleobjects-detail.component.css']
})
export class BattleobjectsDetailComponent implements OnInit {
	constructor(private route: ActivatedRoute, private appComponent: AppComponent) { 
		appComponent.navTitle = "Battle Objects"
		appComponent.fabButtonIcon = "save"
		appComponent.fabButtonAction = () => this.updateItemChanges();
		appComponent.showSpinner = true

		this.service = this.appComponent.getCurrentTopicService()
	}

	private sub: any;
	battleobject: BattleObjects
	service: any
	availableTypes = ["generic", "menu", "particle"]

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
		this.service.updateItemById(this.battleobject.id, this.battleobject, (err, item) => {
			this.battleobject = item
		})
	}

	/*
	*/
	ngOnInit() {
		this.sub = this.route.params.subscribe(params => this.fetchItemById(params['id'], battleobject => {

			this.appComponent.navTitle = battleobject.label
			this.battleobject = battleobject
			
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
		return Boolean(this.battleobject && this.battleobject.properties)
	}

	checkItemProperty(prop :string) :boolean {
		return Boolean(this.battleobject && this.battleobject.properties && this.battleobject.properties[prop])
	}

}
