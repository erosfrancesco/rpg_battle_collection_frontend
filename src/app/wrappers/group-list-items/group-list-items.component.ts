import { Component, OnInit, Input,  Output, EventEmitter } from '@angular/core';
import { Groups } from '../../groups/groups.model'

@Component({
  selector: 'app-group-list-items',
  templateUrl: './group-list-items.component.html',
  styleUrls: ['./group-list-items.component.css']
})
export class GroupListItemsComponent implements OnInit {

	@Input() groups: Groups[]
	@Output() selected = new EventEmitter()
	@Output() removed  = new EventEmitter()

	constructor() { }

	ngOnInit() {
	}

	updateFilters(group: Groups | false) {
		this.selected.emit(group)
	}

	deleteGroup(group: Groups) {
		this.removed.emit(group)
	}

	stopPropagation(event){
		event.stopPropagation();
	}

}
