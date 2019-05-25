import { Component, EventEmitter, Output } from '@angular/core';
import { SpriteService } from './services/sprite.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
	navTitle :string
	fabButtonIcon :string = "add"
	fabButtonAction() { console.log("ok"); }

	spriteService = new SpriteService()
}
