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
		//console.log("updating", e)
		this.resource.groups = e;
		this.service.updateItemById(this.resource.id, this.resource, r => console.log(r))
	}

	// updateGroups(groups: string[]) {
	// 	this.resource.groups = groups;
	// }

	// computeAssignedGroupLabel(id: string) :string {
	// 	const group = this.groupService.items.find(item => item.id === id);

	// 	if (!group) {
	// 		const index = this.resource.groups.findIndex(item => item === id)
	// 		this.resource.groups.splice(index, 1);
	// 		return ""
	// 	}

	// 	return group.label
	// }

	// addGroupToResource(group: Resource) {
	// 	this.resource.groups.push(group.id)
	// 	this.service.updateItemById(this.resource.id, this.resource, r => console.log(r));
	// }

	// removeAssignedGroup(id: string) {
	// 	const index = this.resource.groups.findIndex(item => item === id)
	// 	if (index < 0) {
	// 		return
	// 	}

	// 	this.resource.groups.splice(index, 1);

	// 	this.service.updateItemById(this.resource.id, this.resource, r => console.log(r));
	// }
}
