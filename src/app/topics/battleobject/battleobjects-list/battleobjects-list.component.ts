import { Component, OnInit } from '@angular/core';
import { BattleObjects } from '../../../services/battleobjects.model'
import { AppComponent } from '../../../app.component'
import { MatDialog, MatDialogRef } from '@angular/material'
import { DialogLabelComponent } from '../../../dialogs/dialog-label/dialog-label.component'


@Component({
  selector: 'app-battleobjects-list',
  templateUrl: './battleobjects-list.component.html',
  styleUrls: ['./battleobjects-list.component.css']
})
export class BattleobjectsListComponent implements OnInit {

	

	service = this.appComponent.objectsService

	constructor(private appComponent: AppComponent, public dialog: MatDialog) { 
		appComponent.navTitle = "Battle Objects"
		appComponent.fabButtonIcon = ""
		appComponent.showSpinner = true
		this.fetchItems(() => {
			appComponent.showSpinner = false
			appComponent.fabButtonIcon = "add"
			appComponent.fabButtonAction = () => this.addNewItem()
		})
	}

	ngOnInit() {
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

			const newItem = new BattleObjects()
			newItem.label = label
			this.service.addNewItem(newItem, (err, res) => {
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
	      data: {label: "new_battleobject_label"}
	    });
	}
}
