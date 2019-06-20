
import { Injectable } from '@angular/core';
import { FetchHelper } from './fetch.helper';
import { Actor } from "./actor.model"


@Injectable({
  providedIn: 'root'
})
export class ActorService extends FetchHelper {

  constructor() { 
  	super();
  }

  items: [Actor]
  category: string = "actors"

  getItems(callback = function(err, res) {}) :Promise<any> {
    const errorHandler = err => callback(err, null)
    const responseHandler = items => {
      this.items = items.map((item: Actor) => new Actor().deserialize(item))
      callback(null, this.items)
    }

  	return super.getCategory(this.category).then(responseHandler).catch(errorHandler);
  }


  getItemsById(id: [String], callback = function(err, res) {}) :Promise<any> {
    const errorHandler = err => callback(err, null)
    const responseHandler = items => {
      this.items = items.map((item: Actor) => new Actor().deserialize(item))
      callback(null, this.items)
    }

    return super.getCategoryItemsWithId(this.category, id).then(responseHandler).catch(errorHandler);
  }

  addNewItem(newItem, callback) {
    const errorHandler = err => callback(err, null)
    const responseHandler = added => {
      this.getItems(err => callback(err, added))
    }

    // this should be done on server side...
    newItem.properties = newItem.properties || {}
    //
    
    return super.addNewItemCategory(this.category, newItem).then(responseHandler).catch(errorHandler);
  }


  updateItemById(id: String, body:any, callback = function(err, res) {}) :Promise<any> {
    const errorHandler = err => callback(err, null)
    const responseHandler = updated => {
      //console.log("got", updated)
      callback(null, new Actor().deserialize(updated))
    }

    return super.updateItemCategory(this.category, id, body).catch(errorHandler).then(responseHandler);
  }

  deleteItemById(id: String, callback = function(err, res) {}) :Promise<any> {
    const errorHandler = err => callback(err, null)
    const responseHandler = removed => {
      this.getItems(err => callback(err, removed))
    }

    return super.deleteItemCategory(this.category, id).then(responseHandler).catch(errorHandler);
  }
}
