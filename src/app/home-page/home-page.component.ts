import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component'
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  items :any[] = [
    {name: 'Hydrogen'},
    {name: 'Helium'},
    {name: 'Lithium'}
  ]
  dataSource :Observable<any[]>

  constructor(private app: AppComponent, private router: Router) {
    app.fabButtonIcon = ""
  }

  ngOnInit(): void {
    this.dataSource = of(this.items)
  }


  deleteElement(index :number) {
    this.items.splice(index, 1)
    this.dataSource = of(this.items)
  }

  modifyElement(index :number) {
    this.items[index].name = "To Be Renamed With Modal"
    this.dataSource = of(this.items)
  }

  detailElement(index :number) {
    this.router.navigate(["/user"])
  }
}
