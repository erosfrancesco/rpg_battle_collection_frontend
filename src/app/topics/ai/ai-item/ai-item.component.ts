import { Component, OnInit, Input } from '@angular/core';

import { Ai } from '../../../services/ai.model'
import { AppComponent } from '../../../app.component'
import { MatDialog, MatDialogRef } from '@angular/material'
import { DialogLabelComponent } from '../../../dialogs/dialog-label/dialog-label.component'

@Component({
  selector: 'app-ai-item',
  templateUrl: './ai-item.component.html',
  styleUrls: ['./ai-item.component.css']
})
export class AiItemComponent implements OnInit {

  constructor(public dialog: MatDialog, private appComponent: AppComponent) {
    // this.service = this.appComponent.getCurrentTopicService()
  }

  ngOnInit() {
  }

  @Input() ai: Ai
  // service :any

  // /*
  // */
  // editLabel() {
  //   this.openDialog().afterClosed().subscribe(label => {
  //     if (!label) {
  //       return
  //     }
  //     this.ai.label = label;
  //     this.service.updateItemById(this.ai.id, this.ai, (err, res) => console.log(err, res))
  //   });
  // }

  // openDialog() :MatDialogRef<DialogLabelComponent> {
  //   return this.dialog.open(DialogLabelComponent, { data: {label: this.ai.label} });
  // }

  // deleteItem() :void {
  //   this.service.deleteItemById(this.ai.id, (err, res) => console.log(err, res))
  // }

}
