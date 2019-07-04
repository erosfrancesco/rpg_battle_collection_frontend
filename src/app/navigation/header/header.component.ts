import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	app: AppComponent

	selectedTopicName: string = ""

	constructor(private appComponent :AppComponent) { 
		this.app = appComponent
	}

	updateButtonName(topicName: string): string {
		return (topicName === "RPG Battle Framework") ? "" : topicName
	}

	// openSideBar() {
	// 	console.log(this.app.sidenav)
	// 	this.app.sidenav.toggle()
	// 	//this.app.sidenav.opened = true;//nativeElement.open()
	// }

	ngOnInit() {
	}

}
