import { Component, OnInit } from '@angular/core';
import { Battle } from '../battles.model';
import { BattlesService } from '../battles.service';

@Component({
  selector: 'app-battle-detail',
  templateUrl: './battle-detail.component.html',
  styleUrls: ['./battle-detail.component.css']
})
export class BattleDetailComponent implements OnInit {

	battle: Battle

	constructor(public service: BattlesService) { }
	  
	
	onItemFetched(item: Battle) {
		this.battle = new Battle().deserialize(item)
	}

	checkItemProperties() :boolean {
		return Boolean(this.battle && this.battle.properties)
	}

	checkItemProperty(prop :string) :boolean {
		return Boolean(this.battle && this.battle.properties && this.battle.properties[prop])
	}

	/*
	*/
	ngOnInit() { }
}
