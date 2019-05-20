import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchHelper {

	static baseUrl = "https://arcane-whispers-7140.herokuapp.com/"

	constructor() { 
	}


	static getTest(path) {
		const url = FetchHelper.baseUrl + path;
		return fetch(url).then(res => res.json());
	}

	static getCategory(category) {
		const url = FetchHelper.baseUrl + category;
		return fetch(url).then(res => res.json());
	}

}
