import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-view-table',
  templateUrl: './list-view-table.component.html',
  styleUrls: ['./list-view-table.component.scss']
})
export class ListViewTableComponent implements OnInit {

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
  @Output() rename :EventEmitter<number> = new EventEmitter()
  
  constructor() { }

  ngOnInit() {}


  deleteAction(index :number) {
    this.delete.emit(index)
  }

  renameAction(index :number) {
    this.rename.emit(index)
  }

}
