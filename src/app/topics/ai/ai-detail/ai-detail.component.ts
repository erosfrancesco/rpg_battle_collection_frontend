import { Component, OnInit } from '@angular/core';
import { Ai } from '../../../services/ai.model'
import { AppComponent } from '../../../app.component'
import { ActivatedRoute } from '@angular/router'

import 'brace';
import 'brace/mode/javascript';
import 'brace/theme/ambiance';

@Component({
  selector: 'app-ai-detail',
  templateUrl: './ai-detail.component.html',
  styleUrls: ['./ai-detail.component.css']
})
export class AiDetailComponent implements OnInit {

	constructor(private route: ActivatedRoute, private appComponent: AppComponent) { 
		appComponent.navTitle = "AI"
		appComponent.fabButtonIcon = "save"
		appComponent.fabButtonAction = () => this.updateItemChanges();
		appComponent.showSpinner = true

		this.service = this.appComponent.getCurrentTopicService()
	}

	private sub: any;
	ai: Ai
	service: any

	/*
	*/
	fetchItemById(id, onFetched: Function) {
		this.service.getItemsById([id], (err, [item]) => {
			if (err) {
				console.error(err)
				return
			}

			if (!item) {
				console.error("Item not found: ", item)
				return
			}

			this.ai = item

			onFetched(item);
		})
	}

	updateItemChanges() {
		const updates = {}
		this.service.updateItemById(this.ai.id, this.ai, ai => console.log())
	}

	/*
	*/
	ngOnInit() {
		this.sub = this.route.params.subscribe(params => this.fetchItemById(params['id'], ai => {
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
		return Boolean(this.ai && this.ai.properties)
	}

	updateBodyCode(event) {
		this.ai.properties.body = event
	}

}
