import { Component, OnInit } from '@angular/core';
import { Action } from '../../../services/action.model'
import { AppComponent } from '../../../app.component'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-action-detail',
  templateUrl: './action-detail.component.html',
  styleUrls: ['./action-detail.component.css']
})
export class ActionDetailComponent implements OnInit {
	constructor(private route: ActivatedRoute, private appComponent: AppComponent) { 
		appComponent.fabButtonIcon = "save"
		appComponent.fabButtonAction = () => this.updateItemChanges();
		appComponent.showSpinner = true
	}

	private sub: any;
	action: Action
	service = this.appComponent.actionsService

	fetchItemById(id, onFetched: Function) {
		this.service.getItemsById([id], (err, [ai]) => {
			if (err) {
				console.error(err)
				return
			}

			if (!ai) {
				console.error("Item not found: ", id)
				return
			}

			onFetched(ai);
		})
	}

	updateItemChanges() {
		const updates = {}
		this.service.updateItemById(this.action.id, this.action, action => console.log())
	}

	/*
	*/
	ngOnInit() {
		this.sub = this.route.params.subscribe(params => this.fetchItemById(params['id'], action => {
			this.action = action.deserialize(action)
			this.appComponent.navTitle = action.label
			
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
		return Boolean(this.action && this.action.properties)
	}

	checkItemProperty(prop :string) :boolean {
		return Boolean(this.action && this.action.properties && this.action.properties[prop])
	}

	onFocus() {
		console.log("ok")
	}

}
