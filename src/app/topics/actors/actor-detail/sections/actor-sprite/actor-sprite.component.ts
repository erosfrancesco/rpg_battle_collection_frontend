import { Component, OnInit, Input } from '@angular/core';
import { Actor } from '../../../../../services/actor.model'
import { Sprite } from '../../../../../services/sprite.model'
import { AppComponent } from '../../../../../app.component'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-actor-sprite',
  templateUrl: './actor-sprite.component.html',
  styleUrls: ['./actor-sprite.component.css']
})
export class ActorSpriteComponent implements OnInit {

	constructor(private route: ActivatedRoute, private appComponent: AppComponent) { 

	}

	private sub: any;
	@Input() actor: Actor
	service: any
	sprites: [Sprite]

	/*
	*/
	fetchItems(onFetched: Function) {
		this.service = this.appComponent.getTopicService("Sprites")

		this.service.getItems((err, actor) => {
			if (err) {
				console.error(err)
				return
			}

			onFetched(actor);
		})
	}

	/*
	*/
	ngOnInit() {
		this.sub = this.route.params.subscribe(params => this.fetchItems(sprites => {
			this.sprites = sprites
		}) );
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}

	checkIfParentHasProperties() {
		return (this.actor && this.actor.properties)
	}

}
