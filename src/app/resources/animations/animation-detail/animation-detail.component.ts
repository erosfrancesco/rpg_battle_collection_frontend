import { Component, OnInit } from '@angular/core';
import { Animation } from '../animations.model'
import { AnimationsService } from '../animations.service';


@Component({
  selector: 'app-animation-detail',
  templateUrl: './animation-detail.component.html',
  styleUrls: ['./animation-detail.component.css']
})
export class AnimationDetailComponent implements OnInit {
	constructor(public service: AnimationsService) { 
	}

	animation: Animation

	/*
	*/
	ngOnInit() {
	}

	onItemFetched(item: Animation) {
		this.animation = new Animation().deserialize(item)
	}

	checkItemProperties() :boolean {
		return Boolean(this.animation && this.animation.properties)
	}

	checkItemProperty(prop :string) :boolean {
		return Boolean(this.animation && this.animation.properties && this.animation.properties[prop])
	}
}
