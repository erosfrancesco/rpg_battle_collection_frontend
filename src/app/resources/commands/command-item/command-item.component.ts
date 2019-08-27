import { Component, OnInit, Input } from '@angular/core';
import { Resource } from '../../resource.model';
import { CommandsService } from '../commands.service'

@Component({
  selector: 'app-command-item',
  templateUrl: './command-item.component.html',
  styleUrls: ['./command-item.component.css']
})
export class CommandItemComponent implements OnInit {

  constructor(public service: CommandsService) { }

  @Input() command: Resource

  ngOnInit() {
  }
}
