import { Component, OnInit } from '@angular/core';

import { Battle } from '../../../services/battle.model'
import { AppComponent } from '../../../app.component'
import { MatDialog, MatDialogRef } from '@angular/material'
import { DialogLabelComponent } from '../../../dialogs/dialog-label/dialog-label.component'

@Component({
  selector: 'app-battle-list',
  templateUrl: './battle-list.component.html',
  styleUrls: ['./battle-list.component.css']
})
export class BattleListComponent implements OnInit {

  service: any
  
  constructor(private appComponent: AppComponent, public dialog: MatDialog) { 
    appComponent.navTitle = "Battle"
    appComponent.fabButtonIcon = ""
    appComponent.showSpinner = true

    this.service = this.appComponent.getCurrentTopicService()

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

      const newBattle = new Battle()
      newBattle.label = label
      this.service.addNewItem(newBattle, (err, res) => {
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
        data: {label: "new_battle_label"}
      });
  }

  ngOnInit() {
  }

}
