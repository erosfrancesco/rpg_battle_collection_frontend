import { Component, OnInit } from '@angular/core';

import { Ai } from '../../../services/ai.model'
import { AppComponent } from '../../../app.component'
import { MatDialog, MatDialogRef } from '@angular/material'
import { DialogLabelComponent } from '../../../dialogs/dialog-label/dialog-label.component'

@Component({
  selector: 'app-ai-list',
  templateUrl: './ai-list.component.html',
  styleUrls: ['./ai-list.component.css']
})
export class AiListComponent implements OnInit {

	service = this.appComponent.aiService

	constructor(private appComponent: AppComponent, public dialog: MatDialog) { 
		appComponent.navTitle = "AI"
		appComponent.fabButtonIcon = ""
		appComponent.showSpinner = true

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

			const newSprite = new Ai()
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
	      data: {label: "new_ai_label"}
	    });
	}

	  ngOnInit() {
	  }

}
