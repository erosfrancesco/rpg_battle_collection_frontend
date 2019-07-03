import { Component, EventEmitter, Output } from '@angular/core';
import { ResourceServices } from './services/index.service'
const {
	AiService,
	SpriteService, 
	ActionsService,
	BattleobjectsService,
	AnimationsService,
	CommandService,
	ActorService,
	BattlesService,
	GroupsService
} = ResourceServices;

import { Topic } from './topic.model'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
	
	/* Shell Props */
	navTitle :string
	fabButtonIcon :string = "add"
	fabButtonAction() {}
	showSpinner :boolean = false
	
	group : string | boolean
	@Output() groupSelected: EventEmitter<any> = new EventEmitter<any>();
	groupService :any = new GroupsService() 

	topicMapList :Topic[] = [
		new Topic("Actions", "/actions", new ActionsService()),
		new Topic("Actors", "/actors", new ActorService()),
		new Topic("AI", "/ai", new AiService()),
		new Topic("Animations", "/animations", new AnimationsService()),
		new Topic("Commands", "/commands", new CommandService()),
		new Topic("Battle Objects", "/objects", new BattleobjectsService()),
		new Topic("Battle", "/battles", new BattlesService()),
		new Topic("Sprites", "/sprites", new SpriteService())
	]

	

	getCurrentTopicService() :any {
		return this.getTopicService(this.navTitle)
	}

	getTopicService(topicName: string) :any {
		const currentTopic = this.topicMapList.find(item => item.name === topicName)
		if (!currentTopic) {
			return null
		} 
		
		return currentTopic.service
	}
}
