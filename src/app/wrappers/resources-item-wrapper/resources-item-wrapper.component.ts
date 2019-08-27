import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material'

import { DialogLabelComponent } from '../../shared/dialogs/dialog-label/dialog-label.component'
import { DialogConfirmComponent } from '../../shared/dialogs/dialog-confirm/dialog-confirm.component'
import { ResourceHelper } from '../../resources/resource.helper';
import { Resource } from '../../resources/resource.model'

@Component({
  selector: 'app-resources-item-wrapper',
  templateUrl: './resources-item-wrapper.component.html',
  styleUrls: ['./resources-item-wrapper.component.css']
})
export class ResourcesItemWrapperComponent implements OnInit {

  constructor(public dialog: MatDialog, private snackBar: MatSnackBar) { 
  }

  ngOnInit() {
    this.category = this.service.category
  }

  @Input() resource: Resource
  @Input() service: ResourceHelper
  category: string

  /*
  */
  editLabel() {
    const sub = this.openEditDialog().afterClosed().subscribe(label => {
      sub.unsubscribe()
      if (!label) {
        return
      }

      this.resource.label = label
      
      const sub2 = this.service.updateItemById(this.resource.id, this.resource)
      .subscribe(() => {
        sub2.unsubscribe()
        this.showSnackbar("Operation succeded")
      }, err => {
        sub2.unsubscribe()
        this.showSnackbar("Operation failed. Check your console")
        console.log("** [UPDATE] error **", err)
      });
    });
  }

  deleteItem() :void {
    const sub = this.openConfirmDialog().afterClosed().subscribe(confirm => {
      sub.unsubscribe()
      if (!confirm) {
        return
      }

      const sub2 = this.service.deleteItemById(this.resource.id)
      .subscribe(() => {
        sub2.unsubscribe()
        this.showSnackbar("Operation succeded")
      }, err => {
        sub2.unsubscribe()
        this.showSnackbar("Operation failed. Check your console")
        console.log("** [DELETE] error **", err)
      });
    });
  }
  

  /*
  */
  openEditDialog() :MatDialogRef<DialogLabelComponent> {
    return this.dialog.open(DialogLabelComponent, { data: {label: this.resource.label} });
  }

  openConfirmDialog() :MatDialogRef<DialogConfirmComponent> {
    return this.dialog.open(DialogConfirmComponent, { data: {} });
  }

  /*
  */
  stopPropagation(event){
    event.stopPropagation();
  }

  computeItemUrl() {
    return '/resources/' + this.category + '/' + this.resource.id
  }

  showSnackbar(message: string) {
    this.snackBar.open(message, "Ok", {
      duration: 2000
    });
  }
}
