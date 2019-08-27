import { Component, OnInit } from '@angular/core';
import { CommandsService } from '../commands.service';


@Component({
  selector: 'app-commands-list',
  templateUrl: './commands-list.component.html',
  styleUrls: ['./commands-list.component.css']
})
export class CommandsListComponent implements OnInit {

	constructor(public service: CommandsService) {
	}

	ngOnInit() {
	}

}
