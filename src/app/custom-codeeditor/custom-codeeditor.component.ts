import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppComponent } from '../app.component'
import { AceModule, AceConfigInterface, ACE_CONFIG } from 'ngx-ace-wrapper';

@Component({
  selector: 'app-custom-codeeditor',
  templateUrl: './custom-codeeditor.component.html',
  styleUrls: ['./custom-codeeditor.component.css']
})
export class CustomCodeeditorComponent implements OnInit {

	@Input() code: string
	@Output() codeChange = new EventEmitter()
	config = ACE_CONFIG

	constructor(private appComponent: AppComponent) { 
		//this.config = appComponent.config
	}

	ngOnInit() {

	}

	notify(event) {
		this.codeChange.emit(event);
	}

}
