import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { AceConfigInterface } from 'ngx-ace-wrapper'

import { AppComponent } from '../app.component'

@Component({
  selector: 'app-custom-codeeditor',
  templateUrl: './custom-codeeditor.component.html',
  styleUrls: ['./custom-codeeditor.component.css']
})
export class CustomCodeeditorComponent implements OnInit {

	private topicService: any
	/*
	actionsService = new ActionsService()
	actorService = new ActorService()
	aiService = new AiService()
	animationsService = new AnimationsService()
	commandService = new CommandService()
	objectsService = new BattleobjectsService()
	spriteService = new SpriteService()

	topicMapList :Topic[] = [
		new Topic("Actions", "/actions"),
		new Topic("Actor", "/actors"),
		new Topic("Ai", "/ai"),
		new Topic("Animations", "/animations"),
		new Topic("Commands", "/commands"),
		new Topic("Objects", "/objects"),
		new Topic("Sprite", "/sprites")
	]
	*/
	//}

	

	constructor(private appComponent: AppComponent) { 
		
	}

	ngOnInit() {

	}

	//
	@Input() code: string
	@Output() codeChange = new EventEmitter()
	
	@Input() config :AceConfigInterface = { }

	notify(event) {
		this.codeChange.emit(event);
	}

}
