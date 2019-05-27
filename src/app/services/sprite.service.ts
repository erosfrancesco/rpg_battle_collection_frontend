import { Injectable } from '@angular/core';
import { FetchHelper } from './fetch.helper';
import { Sprite } from '../services/sprite.model';

@Injectable({
  providedIn: 'root'
})
export class SpriteService extends FetchHelper {

  constructor() { 
  	super();
  }

  items: [Sprite]

  getItems(callback = function(err, res) {}) :Promise<any> {
    const errorHandler = err => callback(err, null)
    const responseHandler = items => {
      this.items = items.map((item: Sprite) => new Sprite().deserialize(item))
      callback(null, this.items)
    }

  	return super.getCategory("sprites").then(responseHandler).catch(errorHandler);
  }


  getItemById(id: String, callback = function(err, res) {}) :Promise<any> {
    const errorHandler = err => callback(err, null)
    const responseHandler = item => callback(null, new Sprite().deserialize(item))

    return super.getItemCategory("sprites", id).then(responseHandler).catch(errorHandler);
  }

  addNewItem(newItem, callback) {
    const errorHandler = err => callback(err, null)
    const responseHandler = added => {
      this.getItems(err => callback(err, added))
    }

    // this should be done on server side...
    newItem.properties = newItem.properties || {}
    newItem.properties.src = newItem.properties.src = ""
    newItem.properties.frameWidth = newItem.properties.frameWidth = 0
    newItem.properties.frameHeight = newItem.properties.frameHeight = 0
    newItem.properties.frameX = newItem.properties.frameX = 0
    newItem.properties.frameY = newItem.properties.frameY = 0
    //
    
    return super.addNewItemCategory("sprites", newItem).then(responseHandler).catch(errorHandler);
  }


  updateItemById(id: String, body:any, callback = function(err, res) {}) :Promise<any> {
    const errorHandler = err => callback(err, null)
    const responseHandler = updated => {
      callback(null, updated)
    }

    return super.updateItemCategory("sprites", id, body).catch(errorHandler).then(responseHandler);
  }

  deleteItemById(id: String, callback = function(err, res) {}) :Promise<any> {
    const errorHandler = err => callback(err, null)
    const responseHandler = removed => {
      this.getItems(err => callback(err, removed))
    }

    return super.deleteItemCategory("sprites", id).then(responseHandler).catch(errorHandler);
  }
}
