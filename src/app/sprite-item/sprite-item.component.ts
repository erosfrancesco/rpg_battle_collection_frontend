import { Component, OnInit, Input } from '@angular/core';
import { Sprite } from '../services/sprite.model'
import { AppComponent } from '../app.component'

@Component({
  selector: 'app-sprite-item',
  templateUrl: './sprite-item.component.html',
  styleUrls: ['./sprite-item.component.css']
})
export class SpriteItemComponent implements OnInit {

	@Input() sprite: Sprite

  constructor() { 
    AppComponent
  }

  ngOnInit() {
  	this.computeSpriteStyle()
  }


  backgroundExp : string;
  widthExp : string;
  heightExp : string;
  leftExp : string;

  computeSpriteStyle() {

  	const {src, frameHeight, frameWidth, frameX, frameY} = this.sprite.properties

  	this.backgroundExp = "url(" +  src + ")" + " -" + (frameWidth * frameX) + "px -" + (frameHeight * frameY) + "px";
  	this.widthExp = String(frameWidth)
  	this.heightExp = String(frameHeight)
    this.leftExp = "calc(50% - " + frameWidth + "px / 2)";
  }

}
