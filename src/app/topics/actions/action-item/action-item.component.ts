import { Component, OnInit, Input } from '@angular/core';

import { Action } from '../../../services/action.model'
// import { AppComponent } from '../../../app.component'
// import { MatDialog, MatDialogRef } from '@angular/material'
// import { DialogLabelComponent } from '../../../dialogs/dialog-label/dialog-label.component'


@Component({
  selector: 'app-action-item',
  templateUrl: './action-item.component.html',
  styleUrls: ['./action-item.component.css']
})
export class ActionItemComponent implements OnInit {

  constructor() {//(public dialog: MatDialog, private appComponent: AppComponent) { 
    //this.service = this.appComponent.getCurrentTopicService()
  }

  ngOnInit() {
  }

  @Input() action: Action
  //@Input() service: any
  //service: any

  // /*
  // */
  // editLabel() {
  //   this.openDialog().afterClosed().subscribe(label => {
  //     if (!label) {
  //       return
  //     }
  //     this.action.label = label;
  //     this.service.updateItemById(this.action.id, this.action, (err, res) => console.log(err, res))
  //   });
  // }

  // openDialog() :MatDialogRef<DialogLabelComponent> {
  //   return this.dialog.open(DialogLabelComponent, { data: {label: this.action.label} });
  // }

  // deleteItem() :void {
  //   this.service.deleteItemById(this.action.id, (err, res) => console.log(err, res))
  // }

}
