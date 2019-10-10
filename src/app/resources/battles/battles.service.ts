import { Injectable } from '@angular/core';
import { ResourceHelper } from '../resource.helper';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BattlesService extends ResourceHelper {

  constructor(public http: HttpClient) { 
    super("battles", http);
  }
}
