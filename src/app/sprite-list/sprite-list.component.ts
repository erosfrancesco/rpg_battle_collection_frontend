import { Component, OnInit } from '@angular/core';
import { SpriteService } from '../services/sprite.service';


@Component({
  selector: 'app-sprite-list',
  templateUrl: './sprite-list.component.html',
  styleUrls: ['./sprite-list.component.css']
})
export class SpriteListComponent implements OnInit {

	items = [{
		"label": "Terra", 
		"properties": {
			"src": "https://previews.dropbox.com/p/thumb/AAYWFkVjnobpvGVA2JFvH8tHr-TkkTcnK9p64_w8MQa6SMc9bjd_b4TEuLl1CqM1ZowIGkjpPWUBRUiW45cT3fCdmJxXmsCexACXLBM4AOSvlVn3giV70Pcxdu9Y7gSm8iQ5vaUKqWFF6PdaprTlh8Qrh6cLMjZcsxwNO_9sj5do8umpcrn6WornHMU2y2KHEK4TljTbpVjUKibSCICs086-A7SSukl3dIU4AmjRfEF95zb84bDA6sBKStsXkxkinpNgooKWIVPj9B4ucOxIWHixmpObquJDOTfPQpc6Z1P3l5nwQOq7UppWPJwOYKWOkIVv-z0GVft4fQrf-nKBCHpj/p.png?fv_content=true&size_mode=5",
			"frameWidth": 170,
            "frameHeight": 189,
            "frameX": 0,
            "frameY": 0,
            "scaleX": 100,
            "scaleY": 100
		}
	}]

	constructor() { 
		const spriteService = new SpriteService()
		const res = spriteService.getItems();
		res.then(items => {
			console.log("got", items)
			this.items = items
		}).catch(console.error)
	}

	ngOnInit() {
	}

}
