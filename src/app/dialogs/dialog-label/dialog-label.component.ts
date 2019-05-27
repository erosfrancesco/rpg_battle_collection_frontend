import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'

export interface DialogData {
	label :string
}

@Component({
  selector: 'app-dialog-label',
  templateUrl: './dialog-label.component.html',
  styleUrls: ['./dialog-label.component.css']
})

export class DialogLabelComponent implements OnInit {

	constructor( public dialogRef: MatDialogRef<DialogLabelComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

	cancelClicked(): void {
		this.dialogRef.close();
	}
	doneClicked(): void {
		this.dialogRef.close(this.data.label);
	}
	
	ngOnInit() {
	}

}
