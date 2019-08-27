import { Injectable } from '@angular/core';
import { ResourceHelper } from '../resource.helper';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ActorsService extends ResourceHelper {

  constructor(public http: HttpClient) { 
     super("actors", http);
  }
}
