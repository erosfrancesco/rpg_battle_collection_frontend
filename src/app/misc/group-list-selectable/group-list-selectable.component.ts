import { Component, OnInit, Input,  Output, EventEmitter } from '@angular/core';
import { Groups } from '../../services/groups.model'

@Component({
  selector: 'app-group-list-selectable',
  templateUrl: './group-list-selectable.component.html',
  styleUrls: ['./group-list-selectable.component.css']
})
export class GroupListSelectableComponent implements OnInit {

	@Input() groups: Groups[]
	@Input() selectedItems :string[]
	@Output() toggle  = new EventEmitter()

	constructor() { }

	ngOnInit() {
	}

	toggleItem(group: Groups) {
		const index = this.selectedItems.indexOf(group.id)
		if (index < 0) {
			this.selectedItems.push(group.id)
		}else {
			this.selectedItems.splice(index, 1)
		}

		console.log("toggle")
		this.toggle.emit(this.selectedItems)
		
	} 

	computeSelected(group: Groups, selected: string[]) :boolean {
		if (!(selected && selected.length)) {
			return false
		}
		return (selected.indexOf(group.id) > -1)
	}
}
