import { Component, OnInit, Input } from '@angular/core';
import { Actor } from '../../../../../services/actor.model'
import { Command } from '../../../../../services/command.model'
import { AppComponent } from '../../../../../app.component'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-actor-commands',
  templateUrl: './actor-commands.component.html',
  styleUrls: ['./actor-commands.component.css']
})
export class ActorCommandsComponent implements OnInit {


	constructor(private route: ActivatedRoute, private appComponent: AppComponent) { 

	}

	private sub: any;
	@Input() actor: Actor
	service: any// = this.appComponent.commandService

	/*
	*/
	fetchItems(onFetched: Function) {
		this.service = this.appComponent.getTopicService("Commands")
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
		this.sub = this.route.params.subscribe(params => this.fetchItems(commands => {}) );
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}

	checkIfParentHasProperties() :boolean {
		return Boolean(this.actor && this.actor.properties)
	}

	checkIfThereActorHasCommands() :boolean {
		return Boolean(this.checkIfParentHasProperties() && this.actor.properties.actorCommands)
	}

	/**/
	commandToBeAdded: Command

	addSelectedItem(item: Command, parent: Actor) {
		console.log(item)
		const index = parent.properties.actorCommands.indexOf(item.id)
		if (index > -1) {
			return
		}
		parent.properties.actorCommands.push(item.id)
		this.commandToBeAdded = null
	}

	deleteCommandItem(item: Command, parent: Actor) {
		const index = parent.properties.actorCommands.indexOf(item.id)
		parent.properties.actorCommands.splice(index, 1)
	}

	computeItemDisabled(item: Command, parent: Actor) :boolean {
		const index = parent.properties.actorCommands.indexOf(item.id)
		return (index > -1)
	}

	computeCommandLabel(id: String, items: [Command]) :String {
		if (!items) {
			return
		}

		const commandobj = items.find(command => command.id === id)
		if (!commandobj) {
			return
		}

		return commandobj.label
	}

}
