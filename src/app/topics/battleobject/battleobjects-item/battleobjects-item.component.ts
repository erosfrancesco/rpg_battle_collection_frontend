import { Component, OnInit, Input } from '@angular/core';

import { BattleObjects } from '../../../services/models/battleobjects.model'
import { AppComponent } from '../../../app.component'
import { MatDialog, MatDialogRef } from '@angular/material'
import { DialogLabelComponent } from '../../../dialogs/dialog-label/dialog-label.component'


@Component({
  selector: 'app-battleobjects-item',
  templateUrl: './battleobjects-item.component.html',
  styleUrls: ['./battleobjects-item.component.css']
})
export class BattleobjectsItemComponent implements OnInit {

  constructor(public dialog: MatDialog, private appComponent: AppComponent) { }

  ngOnInit() {
  }

  @Input() battleobject: BattleObjects
  service = this.appComponent.objectsService

  /*
  */
  editLabel() {
    this.openDialog().afterClosed().subscribe(label => {
      if (!label) {
        return
      }
      this.battleobject.label = label;
      this.service.updateItemById(this.battleobject.id, null, (err, res) => console.log(err, res))
    });
  }

  openDialog() :MatDialogRef<DialogLabelComponent> {
    return this.dialog.open(DialogLabelComponent, { data: {label: this.battleobject.label} });
  }

  deleteItem() :void {
    this.service.deleteItemById(this.battleobject.id, (err, res) => console.log(err, res))
  }

}
