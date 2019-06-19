import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-codeeditor',
  templateUrl: './custom-codeeditor.component.html',
  styleUrls: ['./custom-codeeditor.component.css']
})
export class CustomCodeeditorComponent implements OnInit {

	@Input() code: string
	@Output() codeChange = new EventEmitter()

	constructor() { }

	ngOnInit() {

	}

	notify(event) {
		this.codeChange.emit(event);
	}

}
