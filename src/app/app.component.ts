import { Component, EventEmitter, Output } from '@angular/core';
import { AiService } from './services/ai.service';
import { SpriteService } from './services/sprite.service';
import { ActionsService } from './services/actions.service';
import { BattleobjectsService } from './services/battleobjects.service';
import { AnimationsService } from './services/animations.service';
import { CommandService } from './services/command.service';
import { ActorService } from './services/actor.service';
import { Topic } from './topic.model'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
	/**/
	navTitle :string

	fabButtonIcon :string = "add"
	fabButtonAction() {}

	showSpinner :boolean = false
	/**/

	/**/
	actionsService = new ActionsService()
	actorService = new ActorService()
	aiService = new AiService()
	animationsService = new AnimationsService()
	commandService = new CommandService()
	objectsService = new BattleobjectsService()
	spriteService = new SpriteService()
	/**/

	/**/
	topicMapList :Topic[] = [
		new Topic("Actions", "/actions"),
		new Topic("Actor", "/actors"),
		new Topic("Ai", "/ai"),
		new Topic("Animations", "/animations"),
		new Topic("Commands", "/commands"),
		new Topic("Objects", "/objects"),
		new Topic("Sprite", "/sprites")
	]
	/**/
}
