import { Component } from '@angular/core';
import { SpriteService } from './services/sprite.service';

let spriteService = new SpriteService()
spriteService.getTest()

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-deploy';
}
