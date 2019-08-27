import { Component, OnInit } from '@angular/core';
import { Action } from '../action.model'
import { ActionsService } from '../actions.service';


@Component({
  selector: 'app-action-detail',
  templateUrl: './action-detail.component.html',
  styleUrls: ['./action-detail.component.css']
})
export class ActionDetailComponent implements OnInit {
	constructor(public service: ActionsService) { 
	}

	action: Action

	/*
	*/
	ngOnInit() {
	}

	onItemFetched(item: Action) {
		this.action = new Action().deserialize(item)
	}

	checkItemProperties() :boolean {
		return Boolean(this.action && this.action.properties)
	}

	checkItemProperty(prop :string) :boolean {
		return Boolean(this.action && this.action.properties && this.action.properties[prop])
	}
}
