import { Component, OnInit, Input } from '@angular/core';
import { Battle, EncodedActor } from '../../../battles.model';
import { ActorsService } from 'src/app/resources/actors/actors.service';
import { Actor } from 'src/app/resources/actors/actors.model';

@Component({
  selector: 'app-battle-actors',
  templateUrl: './battle-actors.component.html',
  styleUrls: ['./battle-actors.component.css']
})
export class BattleActorsComponent implements OnInit {

	@Input() parent: Battle

  	constructor(public service: ActorsService) { }

	ngOnInit() {
		this.fetchItems()
	}

	fetchItems() {
		// const actorsId :[String] = [null]
		// actorsId.pop()
		// this.parent.properties.actors.forEach(encodedActor => actorsId.push(encodedActor.id))
		// const sub = this.service.getItemsById(actorsId).subscribe(items => {
		// 	sub.unsubscribe()
		// }, err => {
		// 	console.log("ERROR FETCHING FILTERED!!", err)
		// 	sub.unsubscribe()
		// })

		const sub2 = this.service.getItems().subscribe(items => {
			sub2.unsubscribe()
		}, err => {
			console.log("ERROR FETCHING ALL!!", err)
			sub2.unsubscribe()
		})
	}


	checkIfParentHasProperties() :boolean {
		return Boolean(this.parent && this.parent.properties)
	}

	checkIfParentHasActors() :boolean {
		return Boolean(this.checkIfParentHasProperties() && this.parent.properties.actors)
	}

	// /**/
	addSelectedItem(item: Actor) {
		const index = this.computeActorIndex(item.id)
		if (index > -1) {
			return
		}

		const newEncodedActor = new EncodedActor()
		newEncodedActor.id = item.id
		newEncodedActor.options = {
			x: 0,
			y: 0,
			isAlly: false,
			isEnemy: false
		}
		
		this.parent.properties.actors.push(newEncodedActor)
	}

	computeItemDisabled(item: Actor) :boolean {
		const index = this.computeActorIndex(item.id)
		return (index > -1)
	}

	removeElement(item: Actor) {
		const index = this.computeActorIndex(item.id)
		if (index < 0) {
			return
		}
		this.parent.properties.actors.splice(index, 1);
	}

	


	/**/
	computeActorIndex(id) {
		return this.parent.properties.actors.findIndex(encodedActor => encodedActor.id === id)
	}
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
