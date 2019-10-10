import { Component, OnInit, Input } from '@angular/core';
import { Battle } from '../../../battles.model';

@Component({
  selector: 'app-battle-events',
  templateUrl: './battle-events.component.html',
  styleUrls: ['./battle-events.component.css']
})
export class BattleEventsComponent implements OnInit {

	@Input() parent: Battle

	constructor() { }

	ngOnInit() {
	}

	/*
	*/
	checkItemProperties() :boolean {
		return Boolean(this.parent && this.parent.properties)
	}

	checkItemProperty(prop) :boolean {
		return Boolean(this.checkItemProperties() && this.parent.properties[prop])
	}

}
