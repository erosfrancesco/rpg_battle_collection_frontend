
import { Injectable } from '@angular/core';
import { FetchHelper } from './fetch.helper';
import { Action } from "./action.model"

@Injectable({
  providedIn: 'root'
})
export class ActionsService  extends FetchHelper {

  constructor() { 
  	super();
  }

  items: [Action]

  getItemsById(id: [String], callback = function(err, res) {}) :Promise<any> {
    const errorHandler = err => callback(err, null)
    const responseHandler = item => callback(null, new Action().deserialize(item))

    return super.getItemCategory("actions", id).then(responseHandler).catch(errorHandler);
  }

  getItems(callback = function(err, res) {}) :Promise<any> {
    const errorHandler = err => callback(err, null)
    const responseHandler = items => {
      this.items = items.map((item: Action) => new Action().deserialize(item))
      callback(null, this.items)
    }

  	return super.getCategory("actions").then(responseHandler).catch(errorHandler);
  }

  addNewItem(newItem, callback) {
    const errorHandler = err => callback(err, null)
    const responseHandler = added => {
      this.getItems(err => callback(err, added))
    }

    // this should be done on server side...
    newItem.properties = newItem.properties || {}
    //newItem.properties.body = newItem.properties.body = []
    //newItem.properties.params = newItem.properties.params = []
    //
    
    return super.addNewItemCategory("actions", newItem).then(responseHandler).catch(errorHandler);
  }

  updateItemById(id: String, body: Action, callback = function(err, res) {}) :Promise<any> {
    const errorHandler = err => callback(err, null)
    const responseHandler = updated => callback(null, body.deserialize(updated))

    return super.updateItemCategory("actions", id, body).catch(errorHandler).then(responseHandler);
  }

  deleteItemById(id: String, callback = function(err, res) {}) :Promise<any> {
    const errorHandler = err => callback(err, null)
    const responseHandler = removed => {
      this.getItems(err => callback(err, removed))
    }

    return super.deleteItemCategory("actions", id).then(responseHandler).catch(errorHandler);
  }
}
