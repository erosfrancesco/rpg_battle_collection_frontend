import { Component, OnInit, Input } from '@angular/core';

import { Actor } from '../../../services/models/actor.model'
import { AppComponent } from '../../../app.component'
import { MatDialog, MatDialogRef } from '@angular/material'
import { DialogLabelComponent } from '../../../dialogs/dialog-label/dialog-label.component'


@Component({
  selector: 'app-actors-list',
  templateUrl: './actors-list.component.html',
  styleUrls: ['./actors-list.component.css']
})
export class ActorsListComponent implements OnInit {

  service = this.appComponent.actorService
  
  constructor(private appComponent: AppComponent, public dialog: MatDialog) { 
    appComponent.navTitle = "Actors"
    appComponent.fabButtonIcon = ""
    appComponent.showSpinner = true

    this.fetchItems(() => {
      appComponent.showSpinner = false
      appComponent.fabButtonIcon = "add"
      appComponent.fabButtonAction = () => this.addNewItem()
    })
  }

  fetchItems(callback = function() {}) {
    this.service.getItems((err, items) => {
      if (err) {
        console.error(err)
        return
      }
      
      callback();
    });
  }

  addNewItem() {
    this.openDialog().afterClosed().subscribe(label => {
      if (!label) {
        return
      }

      const newSprite = new Actor()
      newSprite.label = label
      this.service.addNewItem(newSprite, (err, res) => {
        if (err) {
          // a pop up maybe...
          console.error(err)
          return
        }
      })
      });
  }


  openDialog(): MatDialogRef<DialogLabelComponent> {
      return this.dialog.open(DialogLabelComponent, {
        data: {label: "new_actor_label"}
      });
  }

  ngOnInit() {
  }

}
