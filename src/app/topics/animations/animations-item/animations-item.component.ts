import { Component, OnInit, Input } from '@angular/core';

import { Animation } from '../../../services/animation.model'
import { AppComponent } from '../../../app.component'
import { MatDialog, MatDialogRef } from '@angular/material'
import { DialogLabelComponent } from '../../../dialogs/dialog-label/dialog-label.component'


@Component({
  selector: 'app-animations-item',
  templateUrl: './animations-item.component.html',
  styleUrls: ['./animations-item.component.css']
})
export class AnimationsItemComponent implements OnInit {

  constructor(public dialog: MatDialog, private appComponent: AppComponent) {
    //this.service = this.appComponent.getCurrentTopicService()
  }

  ngOnInit() {
  }

  @Input() animation: Animation
  // service :any

  // /*
  // */
  // editLabel() {
  //   this.openDialog().afterClosed().subscribe(label => {
  //     if (!label) {
  //       return
  //     }
  //     this.animation.label = label;
  //     this.service.updateItemById(this.animation.id, this.animation, (err, res) => console.log(err, res))
  //   });
  // }

  // openDialog() :MatDialogRef<DialogLabelComponent> {
  //   return this.dialog.open(DialogLabelComponent, { data: {label: this.animation.label} });
  // }

  // deleteItem() :void {
  //   this.service.deleteItemById(this.animation.id, (err, res) => console.log(err, res))
  // }

}
