import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sprite-list',
  templateUrl: './sprite-list.component.html',
  styleUrls: ['./sprite-list.component.css']
})
export class SpriteListComponent implements OnInit {

	items = [{
		label: "Hello", 
		properties: {
			src: "blob:https://mega.nz/5f5e2508-8f7e-4f20-a987-05b0a5ab52ce"//"./src/ffviCast copia.png"
			//"Hello world"
		}
	}]

	constructor() { }

	ngOnInit() {
	}

}
