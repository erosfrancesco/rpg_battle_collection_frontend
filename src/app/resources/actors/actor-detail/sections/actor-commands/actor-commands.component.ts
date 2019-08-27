import { Component, OnInit, Input } from '@angular/core';
import { Actor } from '../../../actors.model';
import { CommandsService } from 'src/app/resources/commands/commands.service';
import { Command } from 'src/app/resources/commands/commands.model';

@Component({
  selector: 'app-actor-commands',
  templateUrl: './actor-commands.component.html',
  styleUrls: ['./actor-commands.component.css']
})
export class ActorCommandsComponent implements OnInit {


	@Input() parent: Actor

	constructor(public service: CommandsService) { }


	/*
	*/
	addSelectedItem(item: Command) {
		const index = this.parent.properties.actorCommands.indexOf(item.id)
		if (index > -1) {
			return
		}
		this.parent.properties.actorCommands.push(item.id)
		this.fetchItems()
	}

	deleteSelectedItem(item: Command) {
		const index = this.parent.properties.actorCommands.indexOf(item.id)
		this.parent.properties.actorCommands.splice(index, 1)
		this.fetchItems()
	}

	computeItemDisabled(item: Command) :boolean {
		const index = this.parent.properties.actorCommands.indexOf(item.id)
		return (index > -1)
	}


	/*
	*/
	ngOnInit() {
		this.fetchItems()
	}

	fetchItems() {
		const sub = this.service.getItemsById(this.parent.properties.actorCommands).subscribe(items => {
			sub.unsubscribe()
		}, err => {
			console.log("ERROR FETCHING FILTERED!!", err)
			sub.unsubscribe()
		})

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

	checkIfThereActorHasCommands() :boolean {
		return Boolean(this.checkIfParentHasProperties() && this.parent.properties.actorCommands)
	}

}
