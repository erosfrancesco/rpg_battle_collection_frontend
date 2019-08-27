import { Component, OnInit, Input } from '@angular/core';
import { Actor, Stats } from '../../../actors.model';

@Component({
  selector: 'app-actor-stats',
  templateUrl: './actor-stats.component.html',
  styleUrls: ['./actor-stats.component.css']
})
export class ActorStatsComponent implements OnInit {

  	constructor() { 
  	}

  	@Input() parent: Actor

	ngOnInit() {
		const stats = ["health", "mana", "strenght", "defense", "velocity", "intelligence", "magic"]
		stats.forEach(statName => this.statPolyfillFor(statName) )
	}


	statPolyfillFor(statName: string) {
		const {stats} = this.parent.properties
		const exists = stats.findIndex(stat => stat.name === statName) > -1
		if (exists) {
			return
		}

		const newStat = new Stats()
		newStat.name = statName
		newStat.value = 0
		this.parent.properties.stats.push(newStat)
	}

	updateStat(value: String) :Number {
		return Number(value)
	}

	actorHasStats() :boolean {
		return Boolean(this.parent && this.parent.properties && this.parent.properties.stats)
	}

}
