import { Component, OnInit, Input } from '@angular/core';
import { Resource } from '../../resource.model';
import { AisService } from '../ais.service'

@Component({
  selector: 'app-ai-item',
  templateUrl: './ai-item.component.html',
  styleUrls: ['./ai-item.component.css']
})
export class AiItemComponent implements OnInit {

  constructor(public service: AisService) { }

  @Input() ai: Resource

  ngOnInit() {
  }
}
