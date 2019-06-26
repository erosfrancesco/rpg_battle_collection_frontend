import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild  } from '@angular/core'
import { AceConfigInterface } from 'ngx-ace-wrapper'

@Component({
  selector: 'app-custom-codeeditor',
  templateUrl: './custom-codeeditor.component.html',
  styleUrls: ['./custom-codeeditor.component.css']
})
export class CustomCodeeditorComponent implements OnInit {
	
	app :any

	dependenciesBlockStart = '/* --COMPUTED DEPENDENCIES BY PLUGIN */\n'
	dependenciesBlockStop  = '/* COMPUTED DEPENDENCIES BY PLUGIN-- */\n\n'

	@ViewChild("editor") editor: ElementRef;
	

	constructor(private elementRef: ElementRef) { 
	}

	ngOnInit() {
	}

	//
	insertDependency(lineCode: string) :string {
		const at = this.computeDependencyBlockIndex()
		return this.code.slice(0, at) + lineCode + this.code.slice(at);
	}

	computeDependencyBlockIndex(): number {
		let index = this.dependenciesBlockStart.length;
		const start = this.code.indexOf(this.dependenciesBlockStart)
		const end   = this.code.indexOf(this.dependenciesBlockStop)

		if ((start < 0) || (end < 0)) {
			this.code = this.dependenciesBlockStart + this.dependenciesBlockStop + this.code
		}else {
			index = end
		}

		return index;
	}

	//
	@Input() code: string
	@Output() codeChange = new EventEmitter()
	
	@Input() config :AceConfigInterface = { 
		"theme": 'ambiance',
		"mode": "javascript",
		"showPrintMargin": true,              // Sets showing of the print margin (Default: false).
		"printMarginColumn": true
	}

	notify(event) {
		this.codeChange.emit(event);
	}

	inputHandler(event) {
		this.code = event
	}
}