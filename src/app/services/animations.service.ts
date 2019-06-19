import { ResourceService } from '../services/utils/resource.service'
import { Animation } from '../services/models/animation.model';

export class AnimationsService extends ResourceService {
  constructor() {
    super("animations")
  }

  /*
  getItems(callback = function(err, res) {}) :Promise<any> {
    const responseHandler = items => callback(null, items.map((item: Animation) => item as Animation))

    return super.getItems(callback);
  }
  */
}


/*
import { Injectable } from '@angular/core';
import { FetchHelper } from './fetch.helper';
import { Animation } from '../services/animation.model';

@Injectable({
  providedIn: 'root'
})
export class AnimationsService extends FetchHelper {

  constructor() { 
  	super();
  }

  items: [Animation]
  category: string = "animations"

  getItems(callback = function(err, res) {}) :Promise<any> {
    const errorHandler = err => callback(err, null)
    const responseHandler = items => {
      this.items = items.map((item: Animation) => new Animation().deserialize(item))
      callback(null, this.items)
    }

  	return super.getCategory(this.category).then(responseHandler).catch(errorHandler);
  }

  getItemById(id: String, callback = function(err, res) {}) :Promise<any> {
    const errorHandler = err => callback(err, null)
    const responseHandler = item => callback(null, new Animation().deserialize(item))

    return super.getItemCategory(this.category, id).then(responseHandler).catch(errorHandler);
  }


  getItemsById(id: [String], callback = function(err, res) {}) :Promise<any> {
    const errorHandler = err => callback(err, null)
    const responseHandler = items => {
      this.items = items.map((item: Animation) => new Animation().deserialize(item))
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
      callback(null, updated)
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
*/
