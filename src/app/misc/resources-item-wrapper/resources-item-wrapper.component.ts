import { Component, OnInit, Input } from '@angular/core';

import { Resource } from '../../services/resource.model'
import { AppComponent } from '../../app.component'
import { MatDialog, MatDialogRef } from '@angular/material'
import { DialogLabelComponent } from '../../dialogs/dialog-label/dialog-label.component'
import { DialogConfirmComponent } from '../../dialogs/dialog-confirm/dialog-confirm.component'

@Component({
  selector: 'app-resources-item-wrapper',
  templateUrl: './resources-item-wrapper.component.html',
  styleUrls: ['./resources-item-wrapper.component.css']
})
export class ResourcesItemWrapperComponent implements OnInit {

  constructor(public dialog: MatDialog, private appComponent: AppComponent) { 
    this.service = this.appComponent.getCurrentTopicService()
  }

  ngOnInit() {
  }

  @Input() resource: Resource
  @Input() category: string
  service: any

  /*
  */
  editLabel() {
    this.openEditDialog().afterClosed().subscribe(label => {
      if (!label) {
        return
      }
      this.resource.label = label;
      this.service.updateItemById(this.resource.id, this.resource);
    });
  }

  deleteItem() :void {
    this.openConfirmDialog().afterClosed().subscribe(confirm => {
      if (!confirm) {
        return
      }
      this.service.deleteItemById(this.resource.id);
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

}
