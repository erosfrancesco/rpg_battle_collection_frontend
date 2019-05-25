import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	app: AppComponent

	constructor(private appComponent :AppComponent) { 
		this.app = appComponent
	}

	ngOnInit() {
	}

  	ngOnDestroy() {
	}

}
