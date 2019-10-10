import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {


  private _selected = new BehaviorSubject<string>("Home");
	selected = this._selected.asObservable();


  setSelected(value :string) {
    this._selected.next(value)
  }

  checkSelected(value :string) :Boolean {
    return this._selected.value === value
  }

  constructor(public app: AppComponent) { }

  ngOnInit() {
  }

}
