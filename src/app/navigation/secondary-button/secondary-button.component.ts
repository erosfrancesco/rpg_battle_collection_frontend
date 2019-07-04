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
	label :string = "Filter by group"

  	constructor(private appComponent :AppComponent, public dialog: MatDialog) { 
		this.app = appComponent
	}

	ngOnInit() {
	}

	groupSelected(group: Groups | false) {
		this.app.group = group ? group.id : false 
		this.label = group ? group.label : "Filter by group"
		this.app.groupSelected.emit(group ? group.id : false)
	}
}
