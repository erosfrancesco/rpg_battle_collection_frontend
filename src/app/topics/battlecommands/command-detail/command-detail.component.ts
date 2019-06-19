import { Component, OnInit } from '@angular/core';
import { Command } from '../../../services/models/command.model'
import { AppComponent } from '../../../app.component'
import { ActivatedRoute } from '@angular/router'

import 'brace';
import 'brace/mode/javascript';
import 'brace/theme/ambiance';

@Component({
  selector: 'app-command-detail',
  templateUrl: './command-detail.component.html',
  styleUrls: ['./command-detail.component.css']
})
export class CommandDetailComponent implements OnInit {

  	constructor(private route: ActivatedRoute, private appComponent: AppComponent) { 
		appComponent.fabButtonIcon = "save"
		appComponent.fabButtonAction = () => this.updateItemChanges();
		appComponent.showSpinner = true
	}

	private sub: any;
	commandobject: Command
	service = this.appComponent.commandService

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
		const updates = {}
		this.service.updateItemById(this.commandobject.id, this.commandobject, command => console.log())
	}

	/*
	*/
	ngOnInit() {
		this.sub = this.route.params.subscribe(params => this.fetchItemById(params['id'], command => {
			this.commandobject = command.deserialize(command)
			this.appComponent.navTitle = command.label
			
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
		return Boolean(this.commandobject && this.commandobject.properties && this.commandobject.properties.action)
	}

	checkItemProperty(key: string) :boolean {
		return Boolean(this.commandobject && this.commandobject.properties && this.commandobject.properties[key])
	}
}
