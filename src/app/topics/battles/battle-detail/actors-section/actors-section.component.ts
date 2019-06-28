import { Component, OnInit, Input } from '@angular/core';
import { Battle } from '../../../../services/battle.model'
import { Actor } from '../../../../services/actor.model'
import { AppComponent } from '../../../../app.component'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-actors-section',
  templateUrl: './actors-section.component.html',
  styleUrls: ['./actors-section.component.css']
})
export class ActorsSectionComponent implements OnInit {

	private sub: any;
	@Input() battle: Battle
	service: any

  	constructor(private route: ActivatedRoute, private appComponent: AppComponent) { 
  	}

	/*
	*/
	fetchItems(onFetched: Function) {
		this.service = this.appComponent.getTopicService("Actors")
		this.service.getItems((err, actor) => {
			if (err) {
				console.error(err)
				return
			}

			onFetched(actor);
		})
	}

	ngOnInit() {
		this.sub = this.route.params.subscribe(params => this.fetchItems(actors => {console.log(actors)}) );
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}

	checkIfParentHasProperties() :boolean {
		return Boolean(this.battle && this.battle.properties)
	}

	checkIfBattleHasActors() :boolean {
		return Boolean(this.checkIfParentHasProperties() && this.battle.properties.actors)
	}

	/**/
	addSelectedItem(item: Actor, parent: Battle) {

		const index = parent.properties.actors.findIndex(encodedActor => encodedActor.id === item.id)
		if (index > -1) {
			return
		}
		parent.properties.actors.push({
			id: item.id,
			options: {
				x: 0,
				y: 0,
				isAlly: false,
				isEnemy: false
			}
		})
		//this.actors = null
	}

	removeElement(item: Actor, parent: Battle) {
		//console.log(item, parent.properties.actors.findIndex(encodedActor => encodedActor.id === item.id))
		const index = parent.properties.actors.findIndex(encodedActor => encodedActor.id === item.id)
		if (index < 0) {
			return
		}
		parent.properties.actors.splice(index, 1);

		console.log(parent.properties.actors)
	}

	computeItemDisabled(item: Actor, parent: Battle) :boolean {
		const index = this.battle.properties.actors.findIndex(encodedActor => encodedActor.id === item.id)
		return (index > -1)
	}


	/**/
	computeActorLabel(id) {
		if (!this.service.items) {
			return ""
		}
		const actor = this.service.items.find(item => item.id === id)
		if (!actor) {
			return ""
		}

		return actor.label;
	}

}
