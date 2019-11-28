import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material'

import { ResourceHelper } from '../../resources/resource.helper';
import { Resource } from '../../resources/resource.model'
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-resource-detail-wrapper',
  templateUrl: './resource-detail-wrapper.component.html',
  styleUrls: ['./resource-detail-wrapper.component.scss']
})
export class ResourceDetailWrapperComponent implements OnInit {
  
  constructor(private route: ActivatedRoute, private app: AppComponent, private snackBar: MatSnackBar) { 
		app.toggleFabButton(false)
		app.toggleSpinner(true)
	}

	private sub: Subscription
	@Input() item: Resource
	@Input() service: ResourceHelper;

	@Output() itemFetched: EventEmitter<Resource> = new EventEmitter()

	
	/*
	*/
	ngOnInit() {
		this.sub = this.route.params.subscribe(params => {
			if (!this.service) {
				return
			}
			this.fetchItemById(params['id'])
		})
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}


	/*
	*/
	fetchItemById(id) {
		const sub = this.service.getItemsById([id])
		.subscribe( ([item]) => {
			sub.unsubscribe()
			this.itemFetched.emit(item)
			this.app.fabButtonAction = () => this.updateItemChanges();
			this.app.toggleFabButton("save")
			this.app.toggleSpinner(false)
		}, err => {
			sub.unsubscribe()
			this.showSnackbar("Error fetching item. Check your console")
			console.log("** [FETCH] Failed **", 'item id:', id, 'error:', err)
		})
	}

	updateItemChanges() {
		this.app.toggleFabButton(false)
		const sub = this.service.updateItemById(this.item.id, this.item).subscribe(() => {
			sub.unsubscribe()
			this.showSnackbar("Item saved")
			this.app.toggleFabButton("save")
		}, err => {
			sub.unsubscribe()
			this.showSnackbar("Operation failed. Check your console")
			console.log("** [UPDATE] Failed **", 'item id:', this.item.id, 'error:', err)
		})
	}

	showSnackbar(message: string) {
		this.snackBar.open(message, "Ok", {
			duration: 2000
		});
	}
}
