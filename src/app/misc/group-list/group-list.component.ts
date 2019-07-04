import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AppComponent } from '../../app.component';
import { Groups } from '../../services/groups.model'
import { MatDialog, MatDialogRef } from '@angular/material'
import { DialogLabelComponent } from '../../dialogs/dialog-label/dialog-label.component'

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {

	app: AppComponent
	service: any
	filtered: Groups[]
	filterLabel :string = ""

	@Input() selectedItems: string[]
	@Input() selectable :boolean = false
	@Output() selected = new EventEmitter<Groups | boolean>()
	@Output() toggle = new EventEmitter<string[]>()

	constructor(private appComponent :AppComponent, public dialog: MatDialog) { 
		this.app = appComponent
		this.service = this.app.groupService
		this.fetchItems();
	}

	ngOnInit() {
	}

	stopPropagation(event){
		event.stopPropagation();
	}

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

	updateSelected(groups: string[]) {
		this.toggle.emit(this.selectedItems)
	}

	filterByLabel(label: string) {
		this.filtered = this.service.items.filter(item => item.label.includes(label))
	}

	updateFilters(group: Groups | false) {
		this.selected.emit(group)
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

}
