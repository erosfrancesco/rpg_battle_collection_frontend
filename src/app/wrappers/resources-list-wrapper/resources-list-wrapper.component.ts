import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material'
import { Router } from '@angular/router';

import { AppComponent } from '../../app.component'
import { DialogLabelComponent } from '../../shared/dialogs/dialog-label/dialog-label.component'

import { Resource } from '../../resources/resource.model'
import { ResourceHelper } from '../../resources/resource.helper';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-resources-list-wrapper',
  templateUrl: './resources-list-wrapper.component.html',
  styleUrls: ['./resources-list-wrapper.component.scss']
})
export class ResourcesListWrapperComponent implements OnInit {

	@Input() service: ResourceHelper
	groupFilter: any
	
	serviceSubscription: Subscription


	constructor(
		public app: AppComponent, 
		public dialog: MatDialog, 
		private snackBar: MatSnackBar, 
		public router: Router
	) { 
		// this.app.fabButtonAction = () => this.addNewItem()


		
		/* Service */


		/* Init */
		// this.fetchItemsByGroup(this.app.group, () => {
		// 	this.app.showSpinner = false
		//  	this.app.fabButtonIcon = "add"
		// })

		// this.groupFilter = this.app.groupSelected.subscribe(group => {
		// 	this.app.fabButtonIcon = ""
		// 	this.app.showSpinner = true
			
		// 	this.fetchItemsByGroup(group, items => {
		// 		this.app.showSpinner = false
		// 		this.app.fabButtonIcon = "add"
		// 		this.itemFetch.emit(items)
		// 	})
		// })
	}

	/*
		Get those items!
	*/
	ngOnInit() {
		this.fetchItems(() => {
			// console.log("got items", this.service.items)
		})
	}

	ngOnDestroy() {
		this.serviceSubscription.unsubscribe()
		//this.groupFilter.unsubscribe();
	}


	/*
	*/
	// fetchItemsByGroup(group :string | boolean, callback: (items: Resource[]) => void) {
	// 	if (!group) {
	// 		this.fetchItems(callback)
	// 		return
	// 	}

	// 	this.service.getItemsByGroup(group).subscribe(items => {
	// 	//, (err: any, items: Resource[]) => {
	// 		// if (err) {
	// 		// 	this.app.showSpinner = false
	// 		// 	this.router.navigate([""])
	// 		// 	return
	// 		// }
			
	// 		callback( items.map((item: Resource) => new Resource().deserialize(item)) );
	// 	});
	// }

	fetchItems(callback: () => void) {

		if (!this.service) {
			console.log("no service passed")
			return;
		}

		this.app.toggleFabButton(false)
		this.app.toggleSpinner(true)

		this.serviceSubscription = this.service.getItems()
		.subscribe(() => {
			this.app.fabButtonAction = () => this.addNewItem()
			this.app.toggleFabButton("add")
			this.app.toggleSpinner(false)

			callback();
		}, err => {
			this.showSnackbar("Fetch failed. Check your console")
			console.log("** [FETCH] error **", err)
		});
	}


	/*
	*/
	addNewItem() {
		this.openDialog().afterClosed().subscribe(label => {
			if (!label) {
				return
			}

			const item = new Resource().deserialize({label})
			const subscription = this.service.addNewItem(item)
			.subscribe(() => {
				subscription.unsubscribe()
				this.showSnackbar("Operation succeded")
			}, err => {
				subscription.unsubscribe()
				this.showSnackbar("Operation failed. Check your console")
				console.log("** [CREATE] error **", err)
			})
		})
	}


	/*
		Dialog for new item
	*/
	openDialog() :MatDialogRef<DialogLabelComponent> {
	    return this.dialog.open(DialogLabelComponent, {
		  data: {label: "_New_Item"}
	    });
	}

	showSnackbar(message: string) {
		this.snackBar.open(message, "Ok", {
			duration: 2000
		});
	}

  
}
