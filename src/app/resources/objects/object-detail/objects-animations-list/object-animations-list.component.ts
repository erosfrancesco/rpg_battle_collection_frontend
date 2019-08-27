import { Component, OnInit, Input } from '@angular/core';
import { BattleObject } from '../../objects.model';
import { AnimationsService } from 'src/app/resources/animations/animations.service';
import { Animation } from 'src/app/resources/animations/animations.model';


@Component({
  selector: 'app-object-animations-list',
  templateUrl: './object-animations-list.component.html',
  styleUrls: ['./object-animations-list.component.css']
})
export class ObjectAnimationsListComponent implements OnInit {

  	@Input() parent :BattleObject

	constructor(public service: AnimationsService) { }

	
	/*
	*/
	addSelectedItem(item: Animation) {
		const index = this.parent.properties.animations.indexOf(item.id)
		if (index > -1) {
			return
		}
		this.parent.properties.animations.push(item.id)
		this.fetchItems()
	}

	deleteSelectedItem(item: Animation) {
		const index = this.parent.properties.animations.indexOf(item.id)
		this.parent.properties.animations.splice(index, 1)
		this.fetchItems()
	}

	computeItemDisabled(item: Animation) :boolean {
		const index = this.parent.properties.animations.indexOf(item.id)
		return (index > -1)
	}


	/*
	*/
	ngOnInit() {
		this.fetchItems()
	}

	fetchItems() {
		const sub = this.service.getItemsById(this.parent.properties.animations).subscribe(items => {
			sub.unsubscribe()
		}, err => {
			console.log("ERROR FETCHING FILTERED!!", err)
			sub.unsubscribe()
		})

		const sub2 = this.service.getItems().subscribe(items => {
			sub2.unsubscribe()
		}, err => {
			console.log("ERROR FETCHING ALL!!", err)
			sub2.unsubscribe()
		})
	}

}
