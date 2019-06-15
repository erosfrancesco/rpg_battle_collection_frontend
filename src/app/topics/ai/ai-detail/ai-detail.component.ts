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
		appComponent.fabButtonIcon = "save"
		appComponent.fabButtonAction = () => this.updateItemChanges();
		appComponent.showSpinner = true
	}

	private sub: any;
	ai: Ai
	originalAi: Ai
	service = this.appComponent.aiService

	/*
	*/
	fetchItemById(id, onFetched: Function) {
		this.service.getItemById(id, (err, ai) => {
			if (err) {
				console.error(err)
				return
			}

			onFetched(ai);
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
			this.ai = ai.deserialize(ai)
			this.originalAi = ai
			this.appComponent.navTitle = ai.label
			
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

}
