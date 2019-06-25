import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild  } from '@angular/core'
import { AceConfigInterface } from 'ngx-ace-wrapper'

@Component({
  selector: 'app-custom-codeeditor',
  templateUrl: './custom-codeeditor.component.html',
  styleUrls: ['./custom-codeeditor.component.css']
})
export class CustomCodeeditorComponent implements OnInit {
	
	app :any

	@ViewChild("editor") editor: ElementRef;
	

	constructor(private elementRef: ElementRef) { 
	}

	ngOnInit() { }

	//
	insertLineOnCurrentPosition(lineCode: string) {
		const { editor } = this.editor.nativeElement.env
		editor.session.insert(editor.getCursorPosition(), lineCode)
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
}