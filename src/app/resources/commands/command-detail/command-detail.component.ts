import { Component, OnInit } from '@angular/core';
import { Command } from '../commands.model'
import { CommandsService } from '../commands.service';


@Component({
  selector: 'app-command-detail',
  templateUrl: './command-detail.component.html',
  styleUrls: ['./command-detail.component.css']
})
export class CommandDetailComponent implements OnInit {
	constructor(public service: CommandsService) { 
	}

	command: Command

	/*
	*/
	ngOnInit() {
	}

	onItemFetched(item: Command) {
		this.command = new Command().deserialize(item)
	}

	checkItemProperties() :boolean {
		return Boolean(this.command && this.command.properties)
	}

	checkItemProperty(prop :string) :boolean {
		return Boolean(this.command && this.command.properties && this.command.properties[prop])
	}
}
