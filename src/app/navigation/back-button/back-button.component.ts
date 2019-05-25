import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.css']
})
export class BackButtonComponent implements OnInit {

  constructor( private location: Location ) { }

  goBack() { 
  	this.location.back()
  }

  navHasBack() {
  	return !this.location.isCurrentPathEqualTo("/")
  }

  ngOnInit() {
  }

}