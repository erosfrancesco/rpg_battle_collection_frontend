import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { Groups } from '../../groups/groups.model'

@Component({
  selector: 'app-secondary-button',
  templateUrl: './secondary-button.component.html',
  styleUrls: ['./secondary-button.component.css']
})
export class SecondaryButtonComponent implements OnInit {

	defaultLabel = "Filter by group"
	label = this.defaultLabel

  	constructor(public app :AppComponent) { 
	}

	ngOnInit() {
	}

	groupSelected(group: Groups | false) {
		this.app.group = group ? group.id : false 
		this.label = group ? group.label : this.defaultLabel
		this.app.groupSelected.emit(group ? group.id : false)
	}
}
