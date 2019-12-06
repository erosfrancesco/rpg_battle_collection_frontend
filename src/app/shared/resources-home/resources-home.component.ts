import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-resources-home',
  templateUrl: './resources-home.component.html',
  styleUrls: ['./resources-home.component.scss']
})
export class ResourcesHomeComponent implements OnInit {

  constructor(public app: AppComponent) { }

  ngOnInit() {
  }

}
