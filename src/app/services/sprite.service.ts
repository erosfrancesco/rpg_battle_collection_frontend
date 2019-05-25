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

  getItems(callback = function(err, res) {}) :Promise<any> {
    const errorHandler = err => callback(err, null)
    const responseHandler = items => callback(null, items.map((item: Sprite) => new Sprite().deserialize(item)))


    //FetchHelper.getItemCategory("sprites", "5cda97427218370017da1c12").then(console.log).catch(console.error)

  	return FetchHelper.getCategory("sprites").then(responseHandler).catch(errorHandler);
  }


  getItemById(id: String, callback = function(err, res) {}) :Promise<any> {
    //if (!id || id === "") {
    //  return
    //}

    const errorHandler = err => callback(err, null)
    const responseHandler = item => callback(null, new Sprite().deserialize(item))//items.map((item: Sprite) => new Sprite().deserialize(item)))
    return FetchHelper.getItemCategory("sprites", id).then(responseHandler).catch(errorHandler);
  }

}
