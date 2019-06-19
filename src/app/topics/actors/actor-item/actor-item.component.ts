import { Component, OnInit, Input } from '@angular/core';

import { Actor } from '../../../services/models/actor.model'
import { AppComponent } from '../../../app.component'
import { MatDialog, MatDialogRef } from '@angular/material'
import { DialogLabelComponent } from '../../../dialogs/dialog-label/dialog-label.component'


@Component({
  selector: 'app-actor-item',
  templateUrl: './actor-item.component.html',
  styleUrls: ['./actor-item.component.css']
})
export class ActorItemComponent implements OnInit {

  constructor(public dialog: MatDialog, private appComponent: AppComponent) { }

  ngOnInit() {
  }

  @Input() actor: Actor
  service = this.appComponent.actorService

  /*
  */
  editLabel() {
    this.openDialog().afterClosed().subscribe(label => {
      if (!label) {
        return
      }
      this.actor.label = label;
      this.service.updateItemById(this.actor.id, this.actor, (err, res) => console.log(err, res))
    });
  }

  openDialog() :MatDialogRef<DialogLabelComponent> {
    return this.dialog.open(DialogLabelComponent, { data: {label: this.actor.label} });
  }

  deleteItem() :void {
    this.service.deleteItemById(this.actor.id, (err, res) => console.log(err, res))
  }
}
