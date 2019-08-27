import { Component, OnInit } from '@angular/core';
import { AisService } from '../ais.service';


@Component({
  selector: 'app-ais-list',
  templateUrl: './ais-list.component.html',
  styleUrls: ['./ais-list.component.css']
})
export class AisListComponent implements OnInit {

	constructor(public service: AisService) {
	}

	ngOnInit() {
	}

}
