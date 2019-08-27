import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog'

@Component({
  selector: 'app-dialog-confirm',
  templateUrl: './dialog-confirm.component.html',
  styleUrls: ['./dialog-confirm.component.css']
})
export class DialogConfirmComponent implements OnInit {

	constructor( public dialogRef: MatDialogRef<DialogConfirmComponent>) {}

	cancelClicked(): void {
		this.dialogRef.close(false);
	}
	confirmClicked(): void {
		this.dialogRef.close(true);
	}
	
	ngOnInit() {
	}

}
