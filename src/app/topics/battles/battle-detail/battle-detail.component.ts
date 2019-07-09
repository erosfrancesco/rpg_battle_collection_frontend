import { Component, OnInit } from '@angular/core';
import { Battle } from '../../../services/battle.model'
import { AppComponent } from '../../../app.component'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-battle-detail',
  templateUrl: './battle-detail.component.html',
  styleUrls: ['./battle-detail.component.css']
})
export class BattleDetailComponent implements OnInit {

	private sub: any;
	battle: Battle
	service: any

  	constructor(private route: ActivatedRoute, private appComponent: AppComponent) { 
	  	appComponent.navTitle = "Battle"
		appComponent.fabButtonIcon = "save"
		appComponent.fabButtonAction = () => this.updateItemChanges();
		appComponent.showSpinner = true

		this.service = this.appComponent.getCurrentTopicService()
  	}

  	/*
	*/
	fetchItemById(id, onFetched: Function) {
		this.service.getItemsById([id], (err, [item]) => {
			if (err) {
				console.error(err)
				return
			}

			if (!item) {
				console.error("Item not found: ", id)
				return
			}

			onFetched(item);
		})
	}

	updateItemChanges() {
		const updates = {}
		this.service.updateItemById(this.battle.id, this.battle, (err, battle) => { this.battle = battle })
	}

	/*
	*/
	ngOnInit() {
		this.sub = this.route.params.subscribe(params => this.fetchItemById(params['id'], battle => {
			this.battle = battle.deserialize(battle)
			this.appComponent.navTitle = battle.label
			
			setTimeout(() => {
				this.appComponent.showSpinner = false
			}, 200);
		}) );
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}


	/*
	*/
	

}
