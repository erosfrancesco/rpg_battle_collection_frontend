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
		
	}

	/*
		Get those items!
	*/
	ngOnInit() {
		this.fetchItems(() => {})
	}

	ngOnDestroy() {
		this.serviceSubscription.unsubscribe()
	}


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
