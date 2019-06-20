import { Injectable } from '@angular/core';
import { FetchHelper } from '../utils/fetch.helper';
import { Action } from "../action.model"


@Injectable({
  providedIn: 'root'
})
export class ActionsService  extends FetchHelper {

  constructor() { 
  	super();
  }

  items: [Action]
  filtered: [Action]
  category: string = "actions"

  
  getItems(callback = function(err, res) {}) :Promise<any> {
    const errorHandler = err => callback(err, null)
    const responseHandler = items => { 
      this.items = items.map((item: Action) => new Action().deserialize(item))
      callback(null, this.items)
    }
    
  	return super.getCategory(this.category).then(responseHandler).catch(errorHandler);
  }

  getItemsById(id: [String], callback = function(err, res) {}) :Promise<any> {
    const errorHandler = err => callback(err, null)
    const responseHandler = items => {
      this.filtered = items.map((item: Action) => new Action().deserialize(item))
      callback(null, this.filtered)
    }
      //callback(null, items.map((item: Action) => new Action().deserialize(item)))

    return super.getCategoryItemsWithId(this.category, id).then(responseHandler).catch(errorHandler);
  }


  addNewItem(newItem, callback) {
    const errorHandler = err => callback(err, null)
    const responseHandler = added => this.getItems(err => callback(err, added))

    // this should be done on server side...
    newItem.properties = newItem.properties || {}
    
    return super.addNewItemCategory(this.category, newItem).then(responseHandler).catch(errorHandler);
  }


  updateItemById(id: String, body: Action, callback = function(err, res) {}) :Promise<any> {
    const errorHandler = err => callback(err, null)
    const responseHandler = updated => callback(null, body.deserialize(updated))

    return super.updateItemCategory(this.category, id, body).catch(errorHandler).then(responseHandler);
  }


  deleteItemById(id: String, callback = function(err, res) {}) :Promise<any> {
    const errorHandler = err => callback(err, null)
    const responseHandler = removed => this.getItems(err => callback(err, removed))

    return super.deleteItemCategory(this.category, id).then(responseHandler).catch(errorHandler);
  }
}
