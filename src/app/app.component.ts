import { Component, EventEmitter, Output } from '@angular/core';
import { AiService } from './services/ai.service';
import { SpriteService } from './services/sprite.service';
import { ActionsService } from './services/actions.service';
import { BattleobjectsService } from './services/battleobjects.service';
import { AnimationsService } from './services/animations.service';
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
	aiService = new AiService()
	animationsService = new AnimationsService()
	objectsService = new BattleobjectsService()
	spriteService = new SpriteService()
	/**/

	/**/
	topicMapList :Topic[] = [
		new Topic("Sprite", "/sprites"),
		new Topic("Ai", "/ai"),
		new Topic("Actions", "/actions"),
		new Topic("Objects", "/objects"),
		new Topic("Animations", "/animations")
	]
	/**/
}
