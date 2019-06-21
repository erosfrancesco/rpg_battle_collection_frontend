import { Component, OnInit } from '@angular/core';

import { Command } from '../../../services/command.model'
import { AppComponent } from '../../../app.component'
import { MatDialog, MatDialogRef } from '@angular/material'
import { DialogLabelComponent } from '../../../dialogs/dialog-label/dialog-label.component'

@Component({
  selector: 'app-command-list',
  templateUrl: './command-list.component.html',
  styleUrls: ['./command-list.component.css']
})
export class CommandListComponent implements OnInit {

  	service :any

	constructor(private appComponent: AppComponent, public dialog: MatDialog) { 
		appComponent.navTitle = "Commands"
		appComponent.fabButtonIcon = ""
		appComponent.showSpinner = true

		this.service = this.appComponent.getCurrentTopicService()

		this.fetchItems(() => {
			appComponent.showSpinner = false
			appComponent.fabButtonIcon = "add"
			appComponent.fabButtonAction = () => this.addNewItem()
		})
	}

	fetchItems(callback = function() {}) {
		this.service.getItems((err, items) => {
			if (err) {
				console.error(err)
				return
			}
			
			callback();
		});
	}

	addNewItem() {
		this.openDialog().afterClosed().subscribe(label => {
			if (!label) {
				return
			}

			const newSprite = new Command()
			newSprite.label = label
			this.service.addNewItem(newSprite, (err, res) => {
				if (err) {
					// a pop up maybe...
					console.error(err)
					return
				}
			})
	    });
	}


	openDialog(): MatDialogRef<DialogLabelComponent> {
	    return this.dialog.open(DialogLabelComponent, {
	      data: {label: "new_command_label"}
	    });
	}

	ngOnInit() {
	}
}
