import { Component, OnInit, Input } from '@angular/core';
import { Resource } from '../../resources/resource.model'
// import { Groups } from '../../groups/groups.model'
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

	constructor(public app: AppComponent) { 
		// this.groupService = this.app.resources.GroupsService
		// this.service = this.app.getCurrentTopicService()
	}

	ngOnInit() {
	}

	updateResource(e :[string]) {
		// this.resource.groups = e;
		// this.service.updateItemById(this.resource.id, this.resource, r => console.log(r))
	}

	// /*
 //  	*/
	// stopPropagation(event){
	// 	event.stopPropagation();
	// }
}
