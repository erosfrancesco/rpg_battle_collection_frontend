import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import {Resource} from "../../services/utils/resource.model"

@Component({
  selector: 'app-resource-search',
  templateUrl: './resource-search.component.html',
  styleUrls: ['./resource-search.component.css']
})
export class ResourceSearchComponent implements OnInit {

	app: AppComponent

	searchString: string = ""
	searchResults: [Resource]

	searchResource(input) {
		console.log(input)
	}

	constructor(private appComponent :AppComponent) { 
		this.app = appComponent
	}

	ngOnInit() {
	}

}
