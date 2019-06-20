import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchHelper {

	static baseUrl = "https://arcane-whispers-7140.herokuapp.com/"

	constructor() { 
	}

	static getCategory(category) {
		const url = this.baseUrl + category;
		return fetch(url).then(res => res.json());
	}

	static getItemCategory(category, id) {
		const url = this.baseUrl + category + "/" + id;
		return fetch(url).then(res => res.json());
	}

	static getCategoryItemsWithId(category, ids) {
		let url = this.baseUrl + category + "/findById?";

		ids.forEach(id => {url += ("id=" + id + "&")})
		url.trim();

		return fetch(url).then(res => res.json());
	}

	static addNewItemCategory(category, newItem) {
		const body = JSON.stringify(newItem);
		const url = this.baseUrl + category;
		
		const headers = new Headers();
		headers.append('Content-type', 'application/json');

		const options = { 
			method: 'POST',
			headers,
			body
        };
		return fetch(url, options).then(res => res.json());
	}

	static updateItemCategory(category, id, itemChanges) {
		const body = JSON.stringify(itemChanges);
		const url = this.baseUrl + category + "/" + id;

		const headers = new Headers();
		headers.append('Content-type', 'application/json');

		const options = { 
			method: 'PATCH',
			headers,
			body
        };
		return fetch(url, options).then(res => res.json());
	}

	static deleteItemCategory(category: string, id: String, callback = function(err, res) {}) :Promise<any> {
		const url = this.baseUrl + category + "/" + id;
	    const options = { 
			method: 'DELETE'
        };
		return fetch(url, options).then(res => res.json())
	  }

}
