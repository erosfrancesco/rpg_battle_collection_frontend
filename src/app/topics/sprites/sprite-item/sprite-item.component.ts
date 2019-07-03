import { Component, OnInit, Input } from '@angular/core';

import { Sprite } from '../../../services/sprite.model'
import { AppComponent } from '../../../app.component'
import { MatDialog, MatDialogRef } from '@angular/material'
import { DialogLabelComponent } from '../../../dialogs/dialog-label/dialog-label.component'


@Component({
  selector: 'app-sprite-item',
  templateUrl: './sprite-item.component.html',
  styleUrls: ['./sprite-item.component.css']
})
export class SpriteItemComponent implements OnInit {

	@Input() sprite: Sprite
  //service :any

  constructor(public dialog: MatDialog, private appComponent: AppComponent) {
    //this.service = this.appComponent.getCurrentTopicService()
  }

  ngOnInit() {
  	this.computeSpriteStyle()
  }

  /*
  */
  backgroundExp : string
  widthExp : string
  heightExp : string
  leftExp : string
  topExp : string
  transformExp: string

  computeSpriteStyle() {

    if (!this.spriteHasSource()) {
      return;
    }

  	const {src, frameHeight, frameWidth, frameX, frameY} = this.sprite.properties 
    const zoom = 135 / ((frameWidth < frameHeight) ? frameHeight : frameWidth)

  	this.backgroundExp = "url(" +  src + ")" + " -" + (frameWidth * frameX) + "px -" + (frameHeight * frameY) + "px no-repeat"
  	this.widthExp = String(frameWidth)
  	this.heightExp = String(frameHeight)
    this.leftExp = "calc(50% - " + frameWidth + "px / 2)"
    this.topExp = "calc(0% - 20px - " + (frameHeight - frameHeight*zoom) + "px / 2)"
    this.transformExp = "scale(" + zoom + ")"
  }

  spriteHasSource() :boolean {
    return Boolean(this.sprite && this.sprite.properties && this.sprite.properties.src)
  }


  // /*
  // */
  // editLabel() {
  //   this.openDialog().afterClosed().subscribe(label => {
  //     if (!label) {
  //       return
  //     }
  //     this.sprite.label = label;
  //     this.service.updateItemById(this.sprite.id, {label}, (err, res) => console.log(err, res))
  //   });
  // }

  // openDialog() :MatDialogRef<DialogLabelComponent> {
  //   return this.dialog.open(DialogLabelComponent, { data: {label: this.sprite.label} });
  // }

  // deleteItem() :void {
  //   this.service.deleteItemById(this.sprite.id, (err, res) => console.log(err, res))
  // }
}
