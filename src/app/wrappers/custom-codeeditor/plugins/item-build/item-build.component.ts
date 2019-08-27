import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Topic } from 'src/app/shared/topic.model';

@Component({
  selector: 'app-item-build',
  templateUrl: './item-build.component.html',
  styleUrls: ['./item-build.component.css']
})
export class ItemBuildComponent implements OnInit {

	//
	@Input() code: string
	@Input() topics :string
	computedLineCode :string
	computedLineIndex :number

	selectedTopic :any
	selectedItem :any
	resourceName :string = ""

	dependenciesBlockStart = '/* --COMPUTED DEPENDENCIES BY PLUGIN */\n'
	dependenciesBlockStop  = '/* COMPUTED DEPENDENCIES BY PLUGIN-- */\n\n'
	//

	//
	constructor() {
	}

	ngOnInit() {
	}
	//

	//
	@Output() build = new EventEmitter()

	notify() {
		this.computeLineCode()
		this.computeDependencyBlockIndex()
		this.build.emit({
			codeLine: this.computedLineCode, 
			at: this.computedLineIndex
		})
	}
	//

	//
	computeDependencyBlockIndex() {
		const start = this.code.indexOf(this.dependenciesBlockStart)
		const end   = this.code.indexOf(this.dependenciesBlockStop)

		if ((start < 0) || (end < 0)) {
			this.computedLineCode = this.dependenciesBlockStart + this.computedLineCode + this.dependenciesBlockStop
			this.computedLineIndex = 0
		} else {
			this.computedLineIndex = end
		}
	}


	computeLineCode() {
		const {label, id} = this.selectedItem
		const builderName = this.computeBuilder()

		this.computedLineCode = "// building " + this.selectedTopic.name + " " + label + 
								"\nconst " + this.resourceName + " = scene.builders." + builderName + ".get('" + id + "'); \n"
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

	selectResourceType(topic: Topic) {
		this.selectedTopic = topic; 
		const sub = topic.service.getItems().subscribe(items => {
			sub.unsubscribe()
		}, err => {
			console.log("Could not get category items:", topic.name, err)
			sub.unsubscribe()
		});
	}
}
