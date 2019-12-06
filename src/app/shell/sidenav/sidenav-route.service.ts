import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { flatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SidenavRouteService {

  private _selected = new BehaviorSubject<number>(null);
  selected = this._selected.asObservable();

  private _selectedChild = new BehaviorSubject<number>(null);
  selectedChild = this._selected.asObservable();

  routeItemsOptions: {
    name: string,
    link: string,
    icon: string,
    childs?: {
      name: string,
      link: string,
      icon: string,
    }[]
  }[] = [
    {
      name: 'Home',
      link: '',
      icon: 'home'
    }, {
      name: 'User',
      link: '/user',
      icon: 'account_circle'
    }, {
      name: 'Organization',
      link: '/organization',
      icon: 'people_alt'
    }, {
      name: 'Resources',
      link: '',
      icon: '',
      childs: [{
        name: 'Actions',
        link: 'resources/actions',
        icon: ''
      }, {
        name: 'Actors',
        link: 'resources/actors',
        icon: ''
      }, {
        name: 'Ai',
        link: 'resources/ai',
        icon: ''
      }, {
        name: 'Animations',
        link: 'resources/animations',
        icon: ''
      }, {
        name: 'Commands',
        link: 'resources/commands',
        icon: ''
      }, {
        name: 'Objects',
        link: 'resources/objects',
        icon: ''
      }, {
        name: 'Sprites',
        link: 'resources/sprites',
        icon: ''
      }, {
        name: 'Battles',
        link: 'resources/battles',
        icon: ''
      }]
    }
  ]





  constructor() { 
  }

  select(value :number, childIndex? :number) {
    this._selected.next(value)

    if (childIndex) {
      this._selectedChild.next(childIndex)
    }
  }

  ifIsSelected(index :number, childIndex? :number) :Observable<boolean> {
    return this._selected.pipe(flatMap(value => {
      if (!childIndex) {
        return of(index === value)
      }
      
      return this._selectedChild.pipe(flatMap(childValue => of(index === value && childIndex === childValue) ))
    }))
  }
}
