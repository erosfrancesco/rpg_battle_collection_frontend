import { Component, OnInit } from '@angular/core';
import { ActionsService } from '../actions.service';


@Component({
  selector: 'app-actions-list',
  templateUrl: './actions-list.component.html',
  styleUrls: ['./actions-list.component.css']
})
export class ActionsListComponent implements OnInit {

	constructor(public service: ActionsService) {
	}

	ngOnInit() {
	}

}
