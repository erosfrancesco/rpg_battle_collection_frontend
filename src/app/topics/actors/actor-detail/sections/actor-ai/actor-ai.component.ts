import { Component, OnInit, Input } from '@angular/core';
import { Actor } from '../../../../../services/actor.model'
import { Ai } from '../../../../../services/ai.model'
import { AppComponent } from '../../../../../app.component'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-actor-ai',
  templateUrl: './actor-ai.component.html',
  styleUrls: ['./actor-ai.component.css']
})
export class ActorAiComponent implements OnInit {


	constructor(private route: ActivatedRoute, private appComponent: AppComponent) { 

	}

	private sub: any;
	@Input() actor: Actor
	service = this.appComponent.aiService

	/*
	*/
	fetchItems(onFetched: Function) {
		this.service.getItems((err, actor) => {
			if (err) {
				console.error(err)
				return
			}

			onFetched(actor);
		})
	}

	/*
	*/
	ngOnInit() {
		this.sub = this.route.params.subscribe(params => this.fetchItems(ais => {
		}) );
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}

	checkIfParentHasProperties() :boolean {
		return Boolean(this.actor && this.actor.properties)
	}

	checkIfIsEnemy() :boolean {
		return Boolean(this.checkIfParentHasProperties() && this.actor.properties.canBeEnemy)
	}
}
