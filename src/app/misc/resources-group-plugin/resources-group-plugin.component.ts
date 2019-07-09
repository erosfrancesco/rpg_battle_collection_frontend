import { Component, OnInit, Input } from '@angular/core';
import { Resource } from '../../services/resource.model'
import { Groups } from '../../services/groups.model'
import { AppComponent } from '../../app.component'

@Component({
  selector: 'app-resources-group-plugin',
  templateUrl: './resources-group-plugin.component.html',
  styleUrls: ['./resources-group-plugin.component.css']
})
export class ResourcesGroupPluginComponent implements OnInit {

	@Input() resource: Resource
	service: any
	groupService: any

	constructor(private appComponent: AppComponent) { 
		this.groupService = this.appComponent.groupService
		this.service = this.appComponent.getCurrentTopicService()
	}

	ngOnInit() {
	}

	updateResource(e :[string]) {
		this.resource.groups = e;
		this.service.updateItemById(this.resource.id, this.resource, r => console.log(r))
	}

	/*
  	*/
	stopPropagation(event){
		event.stopPropagation();
	}
}
