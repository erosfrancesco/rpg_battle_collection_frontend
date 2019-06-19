import { Component, OnInit, Input } from '@angular/core';

import { Command } from '../../../services/models/command.model'
import { AppComponent } from '../../../app.component'
import { MatDialog, MatDialogRef } from '@angular/material'
import { DialogLabelComponent } from '../../../dialogs/dialog-label/dialog-label.component'

@Component({
  selector: 'app-command-item',
  templateUrl: './command-item.component.html',
  styleUrls: ['./command-item.component.css']
})
export class CommandItemComponent implements OnInit {


	constructor(public dialog: MatDialog, private appComponent: AppComponent) { }

  ngOnInit() {
  }

  @Input() commandobject: Command
  service = this.appComponent.commandService

  /*
  */
  editLabel() {
    this.openDialog().afterClosed().subscribe(label => {
      if (!label) {
        return
      }
      this.commandobject.label = label;
      this.service.updateItemById(this.commandobject.id, this.commandobject, (err, res) => console.log(err, res))
    });
  }

  openDialog() :MatDialogRef<DialogLabelComponent> {
    return this.dialog.open(DialogLabelComponent, { data: {label: this.commandobject.label} });
  }

  deleteItem() :void {
    this.service.deleteItemById(this.commandobject.id, (err, res) => console.log(err, res))
  }


}
