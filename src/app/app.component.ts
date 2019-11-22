import { Component } from '@angular/core';
import { ActionsService } from './resources/actions/actions.service';
import { Topic } from './shared/topic.model';
import { ActorsService } from './resources/actors/actors.service';
import { AisService } from './resources/ai/ais.service';
import { AnimationsService } from './resources/animations/animations.service';
import { CommandsService } from './resources/commands/commands.service';
import { ObjectsService } from './resources/objects/objects.service';
import { SpritesService } from './resources/sprites/sprites.service';
import { BattlesService } from './resources/battles/battles.service';
import { ThemeService } from './shared/theme.service';
import { Observable, BehaviorSubject } from 'rxjs';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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
		public battleService: BattlesService,
		public theme: ThemeService
	) {
	}

	ngOnInit() { }
	
	/* Shell Props */
	navTitle :string
	shellShowSpinner :boolean = false

	fabButtonIcon :string = "add"
	fabButtonAction() {}

	private _navIsOpen = new BehaviorSubject<boolean>(false);
	navIsOpen = this._navIsOpen.asObservable();


	shellThemeColor :String = "primary"
	isDarkTheme: Observable<boolean>;
	

	// group and filters
	// group :string | boolean
	// @Output() groupSelected: EventEmitter<any> = new EventEmitter<any>()

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
	]

	toggleSpinner(show: boolean) {
		setTimeout(() => { this.shellShowSpinner = show })
	}

	toggleFabButton(show: boolean | string) {
		setTimeout(() => { this.fabButtonIcon = show ? show as string : "" })
	}

	toggleNavSidebar() {
		this._navIsOpen.next(!this._navIsOpen.value)
	}

	closeNavSidebar() {
		// console.log("ok", this._navIsOpen.value)
		if (!this._navIsOpen.value) {
			return
		}

		this.toggleNavSidebar()
	}
}
