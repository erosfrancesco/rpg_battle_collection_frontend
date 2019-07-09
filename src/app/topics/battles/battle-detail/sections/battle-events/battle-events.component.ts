import { Component, OnInit, Input } from '@angular/core';
import { Battle } from '../../../../../services/battle.model'

@Component({
  selector: 'app-battle-events',
  templateUrl: './battle-events.component.html',
  styleUrls: ['./battle-events.component.css']
})
export class BattleEventsComponent implements OnInit {

	@Input() battle: Battle

	constructor() { }

	ngOnInit() {
	}

	/*
	*/
	checkItemProperties() :boolean {
		return Boolean(this.battle && this.battle.properties)
	}

	checkItemProperty(prop) :boolean {
		return Boolean(this.checkItemProperties() && this.battle.properties[prop])
	}

}
