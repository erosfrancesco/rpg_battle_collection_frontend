import { Component, OnInit, Input } from '@angular/core';
import { Resource } from '../../resource.model';
import { AnimationsService } from '../animations.service'

@Component({
  selector: 'app-animation-item',
  templateUrl: './animation-item.component.html',
  styleUrls: ['./animation-item.component.css']
})
export class AnimationItemComponent implements OnInit {

  constructor(public service: AnimationsService) { }

  @Input() animation: Resource

  ngOnInit() {
  }
}
