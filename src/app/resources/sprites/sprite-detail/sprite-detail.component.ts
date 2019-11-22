import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
// import { AppComponent } from '../../../app.component'
// import { ActivatedRoute } from '@angular/router'
import { Sprite } from '../sprites.model';
import { SpritesService } from '../sprites.service';

@Component({
  selector: 'app-sprite-detail',
  templateUrl: './sprite-detail.component.html',
  styleUrls: ['./sprite-detail.component.css']
})
export class SpriteDetailComponent implements OnInit {
	

	sprite: Sprite

	constructor(public service: SpritesService) { }

	/*
	*/
	ngOnInit() {}


	onItemFetched(item: Sprite) {
		this.sprite = new Sprite().deserialize(item)
		setTimeout(() => this.syncFrameSizeAndPosition(this.sprite), 200)
	}

	fetchSource(sprite: Sprite) :string {
		if ( this.checkItemProperty("src") ) {
			return sprite.properties.src
		}
		return ""
	}
	

	/*
	*/
	@ViewChild("spriteDisplay", { static: true }) spriteDisplay: ElementRef;
	@ViewChild("spriteFrame", { static: false }) spriteFrame: ElementRef;


	frameHeight : string;
	frameWidth : string;
	frameLeft : string;
	frameTop : string;

	heightExp : string;
	widthExp : string;
	leftExp : string;
	topExp : string;

	syncFrameSizeAndPosition(sprite: Sprite) {
		if ( !this.checkItemProperties() ) {
			return
		}

		const {frameWidth, frameHeight, frameX, frameY} = sprite.properties
		const top = this.spriteDisplay.nativeElement.offsetTop + frameHeight * frameY;
		const left = this.spriteDisplay.nativeElement.offsetLeft + frameWidth * frameX;
		
		this.frameHeight = String(frameHeight);
		this.frameWidth = String(frameWidth);
		this.frameLeft = String(left);
		this.frameTop = String(top);
	}


	/*
	*/
	updateChanges(value: String) :Number {
		this.syncFrameSizeAndPosition(this.sprite)
		return Number(value)
	}

	onImageClick({clientX, clientY}) {
		const {top, left} = this.spriteDisplay.nativeElement.getClientRects()[0];
		const x = clientX - left
		const y = clientY - top

		const {frameWidth, frameHeight} = this.sprite.properties
		
		this.sprite.properties.frameX = Math.floor(x / frameWidth)
		this.sprite.properties.frameY = Math.floor(y / frameHeight)
		this.syncFrameSizeAndPosition(this.sprite)
	}


	/*
	*/
	checkItemProperties() :boolean {
		return Boolean(this.sprite && this.sprite.properties)
	}

	checkItemProperty(prop :string) :boolean {
		return Boolean(this.sprite && this.sprite.properties && this.sprite.properties[prop])
	}
}
