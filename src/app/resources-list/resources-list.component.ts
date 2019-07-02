import { Component, OnInit, Input } from '@angular/core';

import { Resource } from '../services/resource.model'
import { AppComponent } from '../app.component'
import { MatDialog, MatDialogRef } from '@angular/material'
import { DialogLabelComponent } from '../dialogs/dialog-label/dialog-label.component'

@Component({
  selector: 'app-resources-list',
  templateUrl: './resources-list.component.html',
  styleUrls: ['./resources-list.component.css']
})
export class ResourcesListComponent implements OnInit {

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
    this.openDialog().afterClosed().subscribe(label => {
      if (!label) {
        return
      }
      this.resource.label = label;
      this.service.updateItemById(this.resource.id, this.resource, (err, res) => console.log(err, res))
    });
  }

  openDialog() :MatDialogRef<DialogLabelComponent> {
    return this.dialog.open(DialogLabelComponent, { data: {label: this.resource.label} });
  }

  deleteItem() :void {
    this.service.deleteItemById(this.resource.id, (err, res) => console.log(err, res))
  }

}
