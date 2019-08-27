import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ResourceHelper } from 'src/app/resources/resource.helper';
import { Resource } from 'src/app/resources/resource.model';

@Component({
  selector: 'app-filtered-resources',
  templateUrl: './filtered-resources.component.html',
  styleUrls: ['./filtered-resources.component.css']
})
export class FilteredResourcesComponent implements OnInit {

  @Input() service: ResourceHelper
  @Output() delete :EventEmitter<Resource> = new EventEmitter()

  
  constructor() { }

  ngOnInit() {
  }

  emitDeletedEvent(item: Resource) {
    this.delete.emit(item)
  }
}
