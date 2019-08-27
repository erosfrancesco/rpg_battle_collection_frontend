import { Component, OnInit } from '@angular/core';
import { AnimationsService } from '../animations.service';


@Component({
  selector: 'app-animations-list',
  templateUrl: './animations-list.component.html',
  styleUrls: ['./animations-list.component.css']
})
export class AnimationsListComponent implements OnInit {

	constructor(public service: AnimationsService) {
	}

	ngOnInit() {
	}

}
