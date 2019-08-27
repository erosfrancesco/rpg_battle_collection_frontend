import { Component, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';
import { ActionsService } from './resources/actions/actions.service';
import { Topic } from './shared/topic.model';
import { ActorsService } from './resources/actors/actors.service';
import { AisService } from './resources/ai/ais.service';
import { AnimationsService } from './resources/animations/animations.service';
import { CommandsService } from './resources/commands/commands.service';
import { ObjectsService } from './resources/objects/objects.service';
import { SpritesService } from './resources/sprites/sprites.service';
import { BattlesService } from './resources/zzz-battles/battles.service';
// import { ResourceServices } from './services/index.service'

// import { User } from './user.model'
// import { Topic } from './topic.model'
// import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

	constructor(
		public actionService: ActionsService, 
		public actorService: ActorsService,
		public aiService: AisService,
		public animationService: AnimationsService,
		public commandService: CommandsService,
		public objectService: ObjectsService,
		public spriteService: SpritesService,
		public battleService: BattlesService
	) {
	}
	
	/* Shell Props */
	navTitle :string
	fabButtonIcon :string = "add"
	fabButtonAction() {}
	shellShowSpinner :boolean = false
	
	// group and filters
	group :string | boolean
	@Output() groupSelected: EventEmitter<any> = new EventEmitter<any>()

	// services
	// resources = ResourceServices(this.http)
	// currentUser: User

	// topic - service map
	topicMapList :Topic[] = [
		new Topic("Actions", this.actionService),
		new Topic("Actors", this.actorService),
		new Topic("Ai", this.aiService),
		new Topic("Animations", this.animationService),
		new Topic("Commands", this.commandService),
		new Topic("Objects", this.objectService),
		new Topic("Sprites", this.spriteService),
		new Topic("Battles", this.battleService)
		
		
		// new Topic("Actors", "/actors", this.resources.ActorService),
		// new Topic("A.I.", "/ai", this.resources.AiService),
		// new Topic("Animations", "/animations", this.resources.AnimationsService),
		// new Topic("Commands", "/commands", this.resources.CommandService),
		// new Topic("Battle Objects", "/objects", this.resources.BattleobjectsService),
		// new Topic("Battle", "/battles", this.resources.BattlesService),
		// new Topic("Sprites", "/sprites", this.resources.SpriteService)
	]

	// initializeServices(token: string, user: User) {
	// 	//this.user = user
	// 	//this.resources.GroupsService.getItems(() => {})
	// }

	// getCurrentTopicService() :any {
	// 	return this.getTopicService(this.navTitle)
	// }

	// getTopicService(topicName: string) :any {
	// 	const currentTopic = this.topicMapList.find(item => item.name === topicName)
	// 	if (!currentTopic) {
	// 		return null
	// 	} 
		
	// 	return currentTopic.service
	// }

	toggleSpinner(show: boolean) {
		setTimeout(() => { this.shellShowSpinner = show })
	}

	toggleFabButton(show: boolean | string) {
		setTimeout(() => { this.fabButtonIcon = show ? show as string : "" })
	}
}
