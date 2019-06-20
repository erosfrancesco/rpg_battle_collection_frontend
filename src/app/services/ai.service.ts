
import { Injectable } from '@angular/core';
import { FetchHelper } from './fetch.helper';
import { Ai } from './ai.model';

@Injectable({
  providedIn: 'root'
})
export class AiService extends FetchHelper {

  constructor() { 
  	super();
  }

  items: [Ai]

  getItemsById(id: [String], callback = function(err, res) {}) :Promise<any> {
    const errorHandler = err => callback(err, null)
    const responseHandler = item => callback(null, new Ai().deserialize(item))

    return super.getItemCategory("ai", id).then(responseHandler).catch(errorHandler);
  }

  getItems(callback = function(err, res) {}) :Promise<any> {
    const errorHandler = err => callback(err, null)
    const responseHandler = items => {
      this.items = items.map((item: Ai) => new Ai().deserialize(item))
      callback(null, this.items)
    }

  	return super.getCategory("ai").then(responseHandler).catch(errorHandler);
  }

  addNewItem(newItem, callback) {
    const errorHandler = err => callback(err, null)
    const responseHandler = added => {
      this.getItems(err => callback(err, added))
    }

    // this should be done on server side...
    newItem.properties = newItem.properties || {}
    newItem.properties.params = newItem.properties.params = "scene, actor, callback"
    newItem.properties.body = newItem.properties.body = ""
    //newItem.properties.body = newItem.properties.body = []
    //newItem.properties.params = newItem.properties.params = []
    //
    
    return super.addNewItemCategory("ai", newItem).then(responseHandler).catch(errorHandler);
  }

  updateItemById(id: String, body:Ai, callback = function(err, res) {}) :Promise<any> {
    const errorHandler = err => callback(err, null)
    const responseHandler = updated => callback(null, body.deserialize(updated))

    return super.updateItemCategory("ai", id, body).catch(errorHandler).then(responseHandler);
  }

  deleteItemById(id: String, callback = function(err, res) {}) :Promise<any> {
    const errorHandler = err => callback(err, null)
    const responseHandler = removed => {
      this.getItems(err => callback(err, removed))
    }

    return super.deleteItemCategory("ai", id).then(responseHandler).catch(errorHandler);
  }
}
