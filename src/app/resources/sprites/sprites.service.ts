import { Injectable } from '@angular/core';
import { ResourceHelper } from '../resource.helper';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SpritesService extends ResourceHelper {

  constructor(public http: HttpClient) { 
     super("sprites", http);
  }
}
