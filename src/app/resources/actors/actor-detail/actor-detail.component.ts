import { Component, OnInit } from '@angular/core';
import { Actor } from '../actors.model';
import { ActorsService } from '../actors.service';


@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.css']
})
export class ActorDetailComponent implements OnInit {
	actor: Actor;

  	constructor(public service: ActorsService) {}

	onItemFetched(item: Actor) {
		this.actor = new Actor().deserialize(item)
	}


	/*
	*/
	ngOnInit() { }


	/*
	*/
	checkItemProperties() :boolean {
		return Boolean(this.actor && this.actor.properties)
	}

}
