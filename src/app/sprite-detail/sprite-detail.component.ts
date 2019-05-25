import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { Sprite } from '../services/sprite.model'
import { AppComponent } from '../app.component'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-sprite-detail',
  templateUrl: './sprite-detail.component.html',
  styleUrls: ['./sprite-detail.component.css']
})
export class SpriteDetailComponent implements OnInit {

	constructor(private route: ActivatedRoute, private elementRef: ElementRef, private appComponent: AppComponent) { 

		appComponent.fabButtonIcon = "save"
		appComponent.fabButtonAction = () => {
			console.log("ok done")
		}
	}

	private sub: any;
	private sprite: Sprite
	private originalSprite: Sprite
	service = this.appComponent.spriteService

	fetchItemById(id, onFetched: Function) {
		this.service.getItemById(id, (err, sprite) => {
			if (err) {
				console.error(err)
				return
			}

			onFetched(sprite);
		})
	}

	ngOnInit() {
		this.sub = this.route.params.subscribe(params => this.fetchItemById(params['id'], sprite => {
			this.sprite = sprite
			this.originalSprite = sprite
			this.appComponent.navTitle = sprite.label
			
			setTimeout(() => this.syncFrameSizeAndPosition(this.sprite), 200);
		}) );
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}

	/*
	*/
	@ViewChild("spriteDisplay") spriteDisplay: ElementRef;
	@ViewChild("spriteFrame") spriteFrame: ElementRef;

	fetchSource(sprite: Sprite) :string {
		if (sprite && sprite.properties && sprite.properties.src) {
			return sprite.properties.src
		}
		return ""
	}


	frameHeight : string;
	frameWidth : string;
	frameLeft : string;
	frameTop : string;

	heightExp : string;
	widthExp : string;
	leftExp : string;
	topExp : string;

	syncFrameSizeAndPosition(sprite: Sprite) {
		if (!sprite || !sprite.properties) {
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
}
