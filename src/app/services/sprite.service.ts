import { Injectable } from '@angular/core';
import { FetchHelper } from './fetch.helper';

@Injectable({
  providedIn: 'root'
})
export class SpriteService extends FetchHelper {

  constructor() { 
  	super();
  }
  

  getTest() {
  	//const req = FetchHelper.getTest("sprites")
  	//FetchHelper.getTest("sprites").then(console.log).catch(console.error);
  }

  getItems() :Promise<any> {
  	return FetchHelper.getCategory("sprites"); //.then(console.log).catch(console.error);
  }

}
