import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-display',
  templateUrl: './item-display.component.html',
  styleUrls: ['./item-display.component.css']
})
export class ItemDisplayComponent implements OnInit {

	@Input() label: string;
	@Input() itemProperties: {src: string, frameHeight: number, frameWidth: number, frameX: number, frameY: number}

  constructor() { }

  ngOnInit() {
  	this.computeSpriteStyle()
  }


  backgroundExp : string;
  widthExp : string;
  heightExp : string;
  leftExp : string;

  computeSpriteStyle() {

  	const {src, frameHeight, frameWidth, frameX, frameY} = this.itemProperties

  	this.backgroundExp = "url(" +  src + ")" + " -" + (frameWidth * frameX) + "px -" + (frameHeight * frameY) + "px";
  	this.widthExp = String(frameWidth)
  	this.heightExp = String(frameHeight)
    this.leftExp = "calc(50% - " + frameWidth + "px / 2)";
  }

}
