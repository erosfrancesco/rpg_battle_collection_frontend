import { Component, OnInit, Input } from '@angular/core';
import { Actor } from '../../../actors.model';
import { AisService } from 'src/app/resources/ai/ais.service';

@Component({
  selector: 'app-actor-ai',
  templateUrl: './actor-ai.component.html',
  styleUrls: ['./actor-ai.component.css']
})
export class ActorAiComponent implements OnInit {

	constructor(public service: AisService) { 
	}

	@Input() parent: Actor

	
	/*
	*/
	ngOnInit() { 
		const sub = this.service.getItems().subscribe(items => {
			sub.unsubscribe()
		}, err => {
			console.log("ERROR FETCHING AI!!", err)
			sub.unsubscribe()
		})
	}

	checkIfParentHasProperties() :boolean {
		return Boolean(this.parent && this.parent.properties)
	}

	checkIfIsEnemy() :boolean {
		return Boolean(this.checkIfParentHasProperties() && this.parent.properties.canBeEnemy)
	}
}
