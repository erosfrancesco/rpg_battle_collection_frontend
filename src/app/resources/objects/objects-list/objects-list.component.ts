import { Component, OnInit } from '@angular/core';
import { ObjectsService } from '../objects.service';


@Component({
  selector: 'app-objects-list',
  templateUrl: './objects-list.component.html',
  styleUrls: ['./objects-list.component.css']
})
export class ObjectsListComponent implements OnInit {

	constructor(public service: ObjectsService) { 
	}

	ngOnInit() {
	}
}
