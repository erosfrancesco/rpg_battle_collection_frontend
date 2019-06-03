import { Component, OnInit, Input } from '@angular/core';

import { Animation } from '../../../services/animation.model'
import { AppComponent } from '../../../app.component'
import { MatDialog, MatDialogRef } from '@angular/material'
import { DialogLabelComponent } from '../../../dialogs/dialog-label/dialog-label.component'


@Component({
  selector: 'app-battleobjects-animations-list',
  templateUrl: './battleobjects-animations-list.component.html',
  styleUrls: ['./battleobjects-animations-list.component.css']
})
export class BattleobjectsAnimationsListComponent implements OnInit {


  	service = this.appComponent.animationsService
  	@Input() idlist :[string]
  	items: Animation

	constructor(private appComponent: AppComponent, public dialog: MatDialog) { 
		
		/*
		this.fetchItems(() => {

		})
		/**/
	}

	fetchItems(callback = function() {}) {
		this.service.getItemsById(this.idlist, (err, items) => {
			if (err) {
				console.error(err)
				return
			}
			
			this.items = items
			callback();
		});
	}

	ngOnInit() {
		this.fetchItems(() => {
			console.log(this.items)
		})
	}

}
