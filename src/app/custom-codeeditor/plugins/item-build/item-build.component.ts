import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppComponent } from '../../../app.component'

@Component({
  selector: 'app-item-build',
  templateUrl: './item-build.component.html',
  styleUrls: ['./item-build.component.css']
})
export class ItemBuildComponent implements OnInit {

	//
	selectedTopic :any
	selectedItem :any
	resourceName :string = ""

	app: AppComponent

	
	//
	@Output() build = new EventEmitter()

	notify() {
		this.build.emit(this.computeLineCode());
	}


	//
	constructor( private appComponent: AppComponent ) { 
		this.app = appComponent
	}

	ngOnInit() {
	}


	//
	computeLineCode() {
		const {label, id} = this.selectedItem
		const builderName = this.computeBuilder()

		return 	"// building " + this.selectedTopic.name + " " + label + 
				"\nconst " + this.resourceName + ' = scene.builders["' + builderName + '"].get("' + id + '"); \n'
	}

	computeBuilder() :string {

		let ret = ""

		switch (this.selectedTopic.name) {
			case "Actions" :
				ret = "actions"
				break;
			case "Actors" :
				ret = "actors"
				break;
			case "AI" :
				ret = "ai"
				break;
			case "Animations" :
				ret = "animations"
				break;
			case "Commands" :
				ret = "commands"
				break;
			case "Battle Objects" :
				ret = "objects"
				break;
			case "Sprites" :
				ret = "sprites"
				break;
		}

		return ret
	}
}
