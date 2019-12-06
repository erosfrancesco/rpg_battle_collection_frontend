import { Component, OnInit } from '@angular/core';
import { SidenavRouteService } from './sidenav-route.service';
import { AppComponent } from 'src/app/app.component';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(public routeOptions: SidenavRouteService, public app: AppComponent) { }

  ngOnInit() {
  }

  isSelected(i) :Observable<boolean> {
    const _darkTheme = new BehaviorSubject<boolean>(true);
    return _darkTheme.asObservable();
  }

}
