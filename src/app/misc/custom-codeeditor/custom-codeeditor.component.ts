import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild  } from '@angular/core'
import { AceConfigInterface } from 'ngx-ace-wrapper'
import { AppComponent } from '../../app.component'

@Component({
  selector: 'app-custom-codeeditor',
  templateUrl: './custom-codeeditor.component.html',
  styleUrls: ['./custom-codeeditor.component.css']
})
export class CustomCodeeditorComponent implements OnInit {

	// CONFIGURATION
	@Input() config :AceConfigInterface = { 
		"theme": 'ambiance',
		"mode": "javascript",
		"fontSize": 18
	}
	//


	@Input() code: string
	@Output() codeChange = new EventEmitter()

	@Input() params: string
	@Output() paramsChange = new EventEmitter()

	@ViewChild("editor") editor: ElementRef;
	app :AppComponent
	

	constructor(private elementRef: ElementRef, private appComponent: AppComponent) { 
		this.app = appComponent
	}

	ngOnInit() {
	}

	insertDependency(codeLine: string, at: number) {
		this.code = ( this.code.slice(0, at) + codeLine + this.code.slice(at) );
	}

	notifyCodeChange(event) {
		this.codeChange.emit(event);
	}

	notifyParamsChange(event) {
		this.paramsChange.emit(event)
	}
}