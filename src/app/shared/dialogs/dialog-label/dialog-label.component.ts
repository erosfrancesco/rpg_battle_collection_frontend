import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'

import { Resource } from '../../../resources/resource.model'


@Component({
  selector: 'app-dialog-label',
  templateUrl: './dialog-label.component.html',
  styleUrls: ['./dialog-label.component.css']
})

export class DialogLabelComponent implements OnInit {

	constructor( public dialogRef: MatDialogRef<DialogLabelComponent>, @Inject(MAT_DIALOG_DATA) public data: Resource) {}

	cancelClicked(): void {
		this.dialogRef.close();
	}
	doneClicked(label): void {
		this.dialogRef.close(label);
	}
	
	ngOnInit() {
	}

}
