import { Component, OnInit } from '@angular/core';
import { BattlesService } from '../battles.service';


@Component({
  selector: 'app-battles-list',
  templateUrl: './battles-list.component.html',
  styleUrls: ['./battles-list.component.css']
})
export class BattlesListComponent implements OnInit {

  constructor(public service: BattlesService) { 
	}

	ngOnInit() {
	}

}
