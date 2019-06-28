import { Component, OnInit, Input } from '@angular/core';

import { Battle } from '../../../services/battle.model'
import { AppComponent } from '../../../app.component'
import { MatDialog, MatDialogRef } from '@angular/material'
import { DialogLabelComponent } from '../../../dialogs/dialog-label/dialog-label.component'

@Component({
  selector: 'app-battle-item',
  templateUrl: './battle-item.component.html',
  styleUrls: ['./battle-item.component.css']
})
export class BattleItemComponent implements OnInit {

	@Input() battle: Battle
	service :any

	constructor(public dialog: MatDialog, private appComponent: AppComponent) {
	    this.service = this.appComponent.getCurrentTopicService()
	}

	ngOnInit() {
	}

	/*
  */
  editLabel() {
    this.openDialog().afterClosed().subscribe(label => {
      if (!label) {
        return
      }
      this.battle.label = label;
      this.service.updateItemById(this.battle.id, this.battle, (err, res) => console.log(err, res))
    });
  }

  openDialog() :MatDialogRef<DialogLabelComponent> {
    return this.dialog.open(DialogLabelComponent, { data: {label: this.battle.label} });
  }

  deleteItem() :void {
    this.service.deleteItemById(this.battle.id, (err, res) => console.log(err, res))
  }

}
