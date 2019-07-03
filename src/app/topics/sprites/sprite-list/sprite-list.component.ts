import { Component, OnInit } from '@angular/core';
import { Sprite } from '../../../services/sprite.model'
import { AppComponent } from '../../../app.component'
import { MatDialog, MatDialogRef } from '@angular/material'
import { DialogLabelComponent } from '../../../dialogs/dialog-label/dialog-label.component'


@Component({
  selector: 'app-sprite-list',
  templateUrl: './sprite-list.component.html',
  styleUrls: ['./sprite-list.component.css']
})
export class SpriteListComponent implements OnInit {

	service :any

	sub :any

	constructor(private appComponent: AppComponent, public dialog: MatDialog) { 
		appComponent.navTitle = "Sprites"
		appComponent.fabButtonIcon = ""
		appComponent.showSpinner = true

		this.service = this.appComponent.getCurrentTopicService()
		
		this.fetchItems(() => {
			appComponent.showSpinner = false
			appComponent.fabButtonIcon = "add"
			appComponent.fabButtonAction = () => this.addNewItem()
		})


		this.sub = appComponent.groupSelected.subscribe(group => {
			appComponent.fabButtonIcon = ""
			appComponent.showSpinner = true
			
			this.fetchItemsByGroup(group, () => {
				appComponent.showSpinner = false
				appComponent.fabButtonIcon = "add"
			})
		})
	}

	ngOnInit() {

	}

	ngOnDestroy() {
		this.sub.unsubscribe();
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

	fetchItemsByGroup(group :string, callback = function() {}) {
		if (!group) {
			this.fetchItems(callback)
			return
		}

		this.service.getItemsByGroup(group, (err, items) => {
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

			const newSprite = new Sprite()
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
	      data: {label: "new_sprite_label"}
	    });
	}
}
