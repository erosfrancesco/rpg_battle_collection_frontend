import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-display',
  templateUrl: './item-display.component.html',
  styleUrls: ['./item-display.component.css']
})
export class ItemDisplayComponent implements OnInit {

	@Input() label: string;
	@Input() image: string;
	@Input() spriteProperties: {src: string, frameHeight: number, frameWidth: number, frameX: number, frameY: number}

  constructor() { }

  ngOnInit() {
  }



  computeSpriteStyle({src, frameHeight, frameWidth, frameX, frameY}, flip) {
	const pathToAssetFolder = "./resources/assets/sprites/";

	const dX = frameWidth * frameX;
	const dY = frameHeight * frameY;
	const zoom = 150 / frameHeight;
	const str =// "zoom: " + zoom +
	          "width:" + frameWidth + "px;" +
	          "height:" + frameHeight + "px;" +
	          "background: url(" +  src + ")" + 
	          " -" + dX + "px" +
	          " -" + dY + "px" +
	          ";";;// + ((flip) ? "transform: rotateY(180deg);" : "") +
	          //";";

	//this.computedStyling = str;
	return str;
  }

}
