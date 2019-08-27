import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AppComponent } from '../../app.component';
import { Groups } from '../../groups/groups.model'
import { MatDialog, MatDialogRef } from '@angular/material'
// import { DialogLabelComponent } from '../../shared/dialogs/dialog-label/dialog-label.component'

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {

	//app: AppComponent
	@Input() service: any
	filtered: Groups[]
	filterLabel :string = ""

	@Input() selectedItems: string[]
	@Input() selectable :boolean = false
	@Output() selected = new EventEmitter<Groups | boolean>()
	@Output() toggle = new EventEmitter<string[]>()
	

	constructor(public app :AppComponent, public dialog: MatDialog) { 
		// this.service = this.app.resources.GroupsService
		
	}

	ngOnInit() {
		// if (this.app.resources.AuthService.isAuthenticated()) {
		// 	this.fetchItems(err => {
		// 		if (err) {
		// 			console.error(err)
		// 		}
		// 	});
		// }
	}


	// stopPropagation(event){
	// 	event.stopPropagation();
	// }

	// fetchItems(callback) {
	// 	this.service.getItems((err, items) => {
	// 		this.filtered = items;
	// 		if (err) {
	// 			callback(err)
	// 			return
	// 		}

	// 		callback(null)
	// 	});
	// }

	// addNewGroupTapped() {
	// 	this.openDialog().afterClosed().subscribe(label => {
	// 		if (!label) {
	// 			return
	// 		}

	// 		const newGroup = new Groups()
	// 		newGroup.label = label
	// 		this.service.addNewItem(newGroup, (err, res) => {
	// 			if (err) {
	// 				// a pop up maybe...
	// 				console.error(err)
	// 				return
	// 			}

	// 			this.fetchItems(() => {})
	// 		})
	//     });
	// }

	// /*
	// */

	// updateSelected(groups: string[]) {
	// 	this.toggle.emit(this.selectedItems)
	// }

	// filterByLabel(label: string) {
	// 	this.filtered = this.service.items.filter(item => item.label.includes(label))
	// }

	// updateFilters(group: Groups | false) {
	// 	this.selected.emit(group)
	// }

	// deleteGroup(group: Groups) {
	// 	this.service.deleteItemById(group.id, (err, item) => {
	// 		if (this.app.group === group.id) {
	// 			this.app.group = false
	// 		}

	// 		if (err) {
	// 			// a pop up maybe...
	// 			console.error(err)
	// 			return
	// 		}
			
	// 		this.fetchItems(() => {})
	// 	})
	// }

	// /*
	// */
	// openDialog(): MatDialogRef<DialogLabelComponent> {
	//     return this.dialog.open(DialogLabelComponent, {
	//       data: {label: "new_group_label"}
	//     });
	// }

}
