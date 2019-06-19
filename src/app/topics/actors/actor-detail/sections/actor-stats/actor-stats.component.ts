import { Component, OnInit, Input } from '@angular/core';
import { Actor, Stats } from '../../../../../services/models/actor.model'

@Component({
  selector: 'app-actor-stats',
  templateUrl: './actor-stats.component.html',
  styleUrls: ['./actor-stats.component.css']
})
export class ActorStatsComponent implements OnInit {

  	constructor() { 
  	}

  	@Input() actor: Actor

	ngOnInit() {
		const stats = ["health", "mana", "strenght", "defense", "velocity", "intelligence", "magic"]
		stats.forEach(statName => this.statPolyfillFor(statName) )
	}


	statPolyfillFor(statName: string) {
		const {stats} = this.actor.properties
		const exists = stats.findIndex(stat => stat.name === statName) > -1
		if (exists) {
			return
		}

		const newStat = new Stats()
		newStat.name = statName
		newStat.value = 0
		this.actor.properties.stats.push(newStat)
	}

	actorHasStats() :boolean {
		return Boolean(this.actor && this.actor.properties && this.actor.properties.stats)
	}

}
