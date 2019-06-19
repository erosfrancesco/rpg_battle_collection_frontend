import { Component, OnInit, Input } from '@angular/core';

import { Animation } from '../../../../services/models/animation.model'
import { BattleObjects } from '../../../../services/models/battleobjects.model'
import { AppComponent } from '../../../../app.component'
import { MatDialog, MatDialogRef } from '@angular/material'
import { DialogLabelComponent } from '../../../../dialogs/dialog-label/dialog-label.component'


@Component({
  selector: 'app-battleobjects-animations-list',
  templateUrl: './battleobjects-animations-list.component.html',
  styleUrls: ['./battleobjects-animations-list.component.css']
})
export class BattleobjectsAnimationsListComponent implements OnInit {


  	service = this.appComponent.animationsService
  	@Input() idlist :[string]
  	@Input() parentobject :BattleObjects
  	items: [Animation]
  	allItems: [Animation]
  	itemToBeAdded: Animation


	constructor(private appComponent: AppComponent, public dialog: MatDialog) { 
		this.service.getItems((err, all) => {
			this.allItems = all
		})
	}

	fetchItems(callback = function() {}) {
		this.service.getItemsById(this.idlist, (err, items) => {
			if (err) {
				console.error(err)
				return
			}
			
			this.items = items
		});
	}

	deleteAnimationItem(item: Animation, parent: BattleObjects) {
		const index = parent.properties.animations.indexOf(item.id)
		parent.properties.animations.splice(index, 1)
		this.idlist = parent.properties.animations
		this.fetchItems()
	}

	addSelectedItem(item: Animation, parent: BattleObjects) {
		const index = parent.properties.animations.indexOf(item.id)
		if (index > -1) {
			return
		}
		parent.properties.animations.push(item.id)
		this.fetchItems()
	}

	computeItemDisabled(item: Animation, parent: BattleObjects) :boolean {
		const index = parent.properties.animations.indexOf(item.id)
		return (index > -1)
	}

	ngOnInit() {
		this.fetchItems()
	}

}
