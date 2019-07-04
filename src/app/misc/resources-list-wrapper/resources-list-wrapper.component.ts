import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Resource } from '../../services/resource.model'
import { AppComponent } from '../../app.component'
import { MatDialog, MatDialogRef } from '@angular/material'
import { DialogLabelComponent } from '../../dialogs/dialog-label/dialog-label.component'

@Component({
  selector: 'app-resources-list-wrapper',
  templateUrl: './resources-list-wrapper.component.html',
  styleUrls: ['./resources-list-wrapper.component.css']
})
export class ResourcesListWrapperComponent implements OnInit {

	app :any
	service: any
	@Output() serviceFound :EventEmitter<any> = new EventEmitter()
	groupFilter: any

	constructor(private appComponent: AppComponent, public dialog: MatDialog) { 
		/* Shell */
		this.app = appComponent
		this.app.showSpinner = true
		this.app.fabButtonIcon = ""
		this.app.fabButtonAction = () => this.addNewItem()

		
		/* Service */
		this.serviceFound.subscribe(service => this.fetchItemsByGroup(this.app.group, () => {
			this.app.showSpinner = false
		 	this.app.fabButtonIcon = "add"
		}))

		/* Init */
		// this.fetchItemsByGroup(this.app.group, () => {
		// 	this.app.showSpinner = false
		//  	this.app.fabButtonIcon = "add"
		// })

		this.groupFilter = this.app.groupSelected.subscribe(group => {
			this.app.fabButtonIcon = ""
			this.app.showSpinner = true
			
			this.fetchItemsByGroup(group, () => {
				this.app.showSpinner = false
				this.app.fabButtonIcon = "add"
			})
		})
	}

	/*
	*/
	fetchItems(callback = function() {}) {

		this.app.fabButtonIcon = ""
		this.app.showSpinner = true

		if (!this.service) {
			return;
		}

		this.service.getItems((err, items) => {
			if (err) {
				console.error(err)
				return
			}
			
			this.app.showSpinner = false
			this.app.fabButtonIcon = "add"

			callback();
		});
	}

	fetchItemsByGroup(group :string | boolean, callback = function() {}) {
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


	/*
	*/
	addNewItem() {
		this.openDialog().afterClosed().subscribe(label => {
			if (!label) {
				return
			}

			const item = new Resource()
			item.label = label
			this.service.addNewItem(item, (err, res) => {
				if (err) {
					// a pop up maybe...
					console.error(err)
					return
				}

				this.fetchItems()

				// new item event
			})
	    });
	}


	/*
	*/
	openDialog(): MatDialogRef<DialogLabelComponent> {
	    return this.dialog.open(DialogLabelComponent, {
	      data: {label: "new_item_label"}
	    });
	}

  	ngOnInit() {
  		this.service = this.app.getCurrentTopicService()
  		setTimeout(() => this.serviceFound.emit(this.service), 200);
	}

	ngOnDestroy() {
		this.serviceFound.unsubscribe();
		this.groupFilter.unsubscribe();
	}

  
}
