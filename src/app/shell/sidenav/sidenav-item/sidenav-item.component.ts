import { Component, OnInit, Input } from '@angular/core';
import { SidenavRouteService } from '../sidenav-route.service';
import { Observable, of } from 'rxjs';
import { flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-sidenav-item',
  templateUrl: './sidenav-item.component.html',
  styleUrls: ['./sidenav-item.component.scss']
})
export class SidenavItemComponent implements OnInit {

  @Input() index: number
  options: {
    name: string;
    link: string;
    icon: string;
    childs?: {
      name: string;
      link: string;
      icon: string;
    }[]
  }

  constructor(public routeService: SidenavRouteService) { }

  ngOnInit() {
    this.options = this.routeService.routeItemsOptions[this.index]
  }

  isSelected(childIndex? :number) :Observable<boolean> {
    return this.routeService.ifIsSelected(this.index, childIndex)
  }

}
