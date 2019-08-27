import { Component, OnInit } from '@angular/core';
import { SpritesService } from '../sprites.service';


@Component({
  selector: 'app-sprites-list',
  templateUrl: './sprites-list.component.html',
  styleUrls: ['./sprites-list.component.css']
})
export class SpritesListComponent implements OnInit {

	constructor(public service: SpritesService) { 
	}

	ngOnInit() {
	}
}
