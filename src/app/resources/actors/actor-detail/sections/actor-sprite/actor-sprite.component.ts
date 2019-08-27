import { Component, OnInit, Input } from '@angular/core';
import { Actor } from '../../../actors.model';
import { SpritesService } from 'src/app/resources/sprites/sprites.service';

@Component({
  selector: 'app-actor-sprite',
  templateUrl: './actor-sprite.component.html',
  styleUrls: ['./actor-sprite.component.css']
})
export class ActorSpriteComponent implements OnInit {

	constructor(public service: SpritesService) { }

	@Input() parent: Actor

	/*
	*/
	ngOnInit() {
		const sub = this.service.getItems().subscribe(items => {
			sub.unsubscribe()
		}, err => {
			console.log("ERROR FETCHING SPRITES!", err)
			sub.unsubscribe()
		})

		// later...
		// const sub2 = this.service.getItems().subscribe(items => {
		// 	sub2.unsubscribe()
		// }, err => {
		// 	console.log("ERROR FETCHING ALL!!", err)
		// 	sub2.unsubscribe()
		// })
	}


	checkIfParentHasProperties() {
		return (this.parent && this.parent.properties)
	}

}
