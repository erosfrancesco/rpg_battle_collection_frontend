import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-view-collection',
  templateUrl: './list-view-collection.component.html',
  styleUrls: ['./list-view-collection.component.scss']
})
export class ListViewCollectionComponent implements OnInit {

  // 
  private _multi: boolean = false;

  @Input()
  set multi(value) {
    this._multi = typeof value !== 'undefined' && value !== false
  }
  get multi(): boolean {
    return this._multi;
  }

  @Input() dataSource :any[]

  @Output() delete :EventEmitter<number> = new EventEmitter()
  @Output() detail :EventEmitter<number> = new EventEmitter()
  @Output() modify :EventEmitter<number> = new EventEmitter()
  

  constructor() { }

  ngOnInit() {
  }


  deleteAction(index :number) {
    this.delete.emit(index)
  }

  detailAction(index :number) {
    this.detail.emit(index)
  }

  modifyAction(index :number) {
    this.modify.emit(index)
  }

}
