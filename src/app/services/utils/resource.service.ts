import { Injectable } from '@angular/core';
import { FetchHelper } from './fetch.helper';
import { Resource } from "./resource.model"

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  category: string
  items: [Resource] = [null]
  
  
  constructor(category: string) { 
    this.category = category
  }

  
  // READ
  getItems(callback = function(err, res) {}) :Promise<any> {
    const errorHandler = err => callback(err, null)
    const responseHandler = items => {
      this.items = items.map((item: Resource) => new Resource().deserialize(item))
      callback(null, this.items)
    }

  	return FetchHelper.getCategory(this.category).then(responseHandler).catch(errorHandler);
  }


  getItemsById(id: [String], callback = function(err, res) {}) :Promise<any> {
    const errorHandler = err => callback(err, null)
    const responseHandler = items => {
      this.items = items.map((item: Resource) => new Resource().deserialize(item))
      callback(null, this.items)
    }

    return FetchHelper.getCategoryItemsWithId(this.category, id).then(responseHandler).catch(errorHandler);
  }


  // CREATE
  addNewItem(newItem, callback) {
    const errorHandler = err => callback(err, null)
    const responseHandler = added => this.getItems(err => callback(err, added))

    // this should be done on server side...
    newItem.properties = newItem.properties || {}
    
    return FetchHelper.addNewItemCategory(this.category, newItem).then(responseHandler).catch(errorHandler);
  }


  // UPDATE
  updateItemById(id: String, body:any, callback = function(err, res) {}) :Promise<any> {
    const errorHandler = err => callback(err, null)
    const responseHandler = update => callback(null, new Resource().deserialize(update))

    return FetchHelper.updateItemCategory(this.category, id, body).catch(errorHandler).then(responseHandler);
  }


  // DELETE
  deleteItemById(id: String, callback = function(err, res) {}) :Promise<any> {
    const errorHandler = err => callback(err, null)
    const responseHandler = removed => this.getItems(err => callback(err, removed))

    return FetchHelper.deleteItemCategory(this.category, id).then(responseHandler).catch(errorHandler);
  }
}
