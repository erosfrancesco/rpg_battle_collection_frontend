import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-wrapper-editor',
  templateUrl: './wrapper-editor.component.html',
  styleUrls: ['./wrapper-editor.component.css']
})
export class WrapperEditorComponent implements OnInit {

	@Input() encodedFunction :any
	@Output() encodedFunctionChange = new EventEmitter()


	constructor() { }

	ngOnInit() {
	}

	notify() {
		this.encodedFunctionChange.emit(this.encodedFunction);
	}

}
