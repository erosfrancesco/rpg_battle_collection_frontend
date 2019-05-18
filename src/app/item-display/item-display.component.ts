import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-display',
  templateUrl: './item-display.component.html',
  styleUrls: ['./item-display.component.css']
})
export class ItemDisplayComponent implements OnInit {

	@Input() label: string;
	@Input() image: string;

  constructor() { }

  ngOnInit() {
  }

}
