import { Component, EventEmitter, Output } from '@angular/core';
import { SpriteService } from './services/sprite.service';
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
	spriteService = new SpriteService()
	/**/

	/**/
	topicMapList :[Topic] = [
		new Topic("Sprite", "/sprites")
	]
	/**/
}
