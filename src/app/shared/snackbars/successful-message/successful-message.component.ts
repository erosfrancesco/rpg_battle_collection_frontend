import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-successful-message',
  templateUrl: './successful-message.component.html',
  styleUrls: ['./successful-message.component.scss']
})
export class SuccessfulMessageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  stopPropagation(event){
    event.stopPropagation();
  }
}
