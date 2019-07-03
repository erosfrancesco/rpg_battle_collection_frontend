import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { MatDialog, MatDialogRef } from '@angular/material'
import { DialogLabelComponent } from '../../dialogs/dialog-label/dialog-label.component'
import { Groups } from '../../services/groups.model'

@Component({
  selector: 'app-secondary-button',
  templateUrl: './secondary-button.component.html',
  styleUrls: ['./secondary-button.component.css']
})
export class SecondaryButtonComponent implements OnInit {

	app: AppComponent
	service: any
	filtered: Groups[]
	filterLabel :string = ""
	label :string = "Groups"

  	constructor(private appComponent :AppComponent, public dialog: MatDialog) { 
		this.app = appComponent
		this.service = this.app.groupService
		this.fetchItems();
	}

	/*
	*/
	fetchItems(callback = function() {}) {
		this.service.getItems((err, items) => {
			this.filtered = items;
			if (err) {
				console.error(err)
				return
			}
			
			callback();
		});
	}

	addNewGroupTapped() {
		this.openDialog().afterClosed().subscribe(label => {
			if (!label) {
				return
			}

			const newGroup = new Groups()
			newGroup.label = label
			this.service.addNewItem(newGroup, (err, res) => {
				if (err) {
					// a pop up maybe...
					console.error(err)
					return
				}

				this.fetchItems()
			})
	    });
	}

	/*
	*/

	filterByLabel(label: string) {
		this.filtered = this.service.items.filter(item => item.label.includes(label))
	}

	updateFilters(group: Groups | false) {
		this.app.group = group ? group.id : false 
		this.label = group ? group.label : "Groups"
		this.app.groupSelected.emit(group ? group.id : false)
	}

	deleteGroup(group: Groups) {
		this.app.groupService.deleteItemById(group.id, (err, item) => {
			if (this.app.group === group.id) {
				this.app.group = false
			}

			if (err) {
				// a pop up maybe...
				console.error(err)
				return
			}
			
			this.fetchItems()
		})
	}

	/*
	*/
	openDialog(): MatDialogRef<DialogLabelComponent> {
	    return this.dialog.open(DialogLabelComponent, {
	      data: {label: "new_group_label"}
	    });
	}

	ngOnInit() {
	}


	stopPropagation(event){
	    event.stopPropagation();
	}

}
