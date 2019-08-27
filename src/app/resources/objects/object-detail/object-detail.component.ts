import { Component, OnInit } from '@angular/core';
import { ObjectsService } from '../objects.service';
import { BattleObject } from '../objects.model';


@Component({
  selector: 'app-object-detail',
  templateUrl: './object-detail.component.html',
  styleUrls: ['./object-detail.component.css']
})
export class ObjectDetailComponent implements OnInit {

	constructor(public service: ObjectsService) { 
	}

	battleobject: BattleObject

	/*
	*/
	ngOnInit() {
	}

	onItemFetched(item: BattleObject) {
		this.battleobject = new BattleObject().deserialize(item)
	}

	checkItemProperties() :boolean {
		return Boolean(this.battleobject && this.battleobject.properties)
	}

	checkItemProperty(prop :string) :boolean {
		return Boolean(this.battleobject && this.battleobject.properties && this.battleobject.properties[prop])
	}

}
