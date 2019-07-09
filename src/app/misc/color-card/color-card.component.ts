import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-color-card',
  templateUrl: './color-card.component.html',
  styleUrls: ['./color-card.component.css']
})
export class ColorCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() color :string = "primary"

}
