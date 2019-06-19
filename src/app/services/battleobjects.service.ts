import { ResourceService } from '../services/resource.service'
import { BattleObjects } from '../services/battleobjects.model';

export class BattleobjectsService extends ResourceService {
  constructor() {
    super("objects")
  }
}

/*
import { Injectable } from '@angular/core';
import { FetchHelper } from './fetch.helper';
import { BattleObjects } from '../services/battleobjects.model';

@Injectable({
  providedIn: 'root'
})
export class BattleobjectsService extends FetchHelper {

  constructor() { 
  	super();
  }

  items: [BattleObjects]
  category: string = "objects"

  getItems(callback = function(err, res) {}) :Promise<any> {
    const errorHandler = err => callback(err, null)
    const responseHandler = items => {
      this.items = items.map((item: BattleObjects) => new BattleObjects().deserialize(item))
      callback(null, this.items)
    }

  	return super.getCategory(this.category).then(responseHandler).catch(errorHandler);
  }


  getItemById(id: String, callback = function(err, res) {}) :Promise<any> {
    const errorHandler = err => callback(err, null)
    const responseHandler = item => callback(null, new BattleObjects().deserialize(item))

    return super.getItemCategory(this.category, id).then(responseHandler).catch(errorHandler);
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