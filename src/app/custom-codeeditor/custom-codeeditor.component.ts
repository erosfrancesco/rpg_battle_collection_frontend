import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AceConfigInterface } from 'ngx-ace-wrapper';

@Component({
  selector: 'app-custom-codeeditor',
  templateUrl: './custom-codeeditor.component.html',
  styleUrls: ['./custom-codeeditor.component.css']
})
export class CustomCodeeditorComponent implements OnInit {

	@Input() code: string
	@Output() codeChange = new EventEmitter()
	
	@Input() config :AceConfigInterface = { }

	constructor() { }

	ngOnInit() {

	}

	notify(event) {
		this.codeChange.emit(event);
	}

}
