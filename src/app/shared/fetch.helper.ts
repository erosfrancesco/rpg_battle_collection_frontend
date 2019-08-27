import { Config } from './config'

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export class FetchHelper {

	baseUrl = Config.baseUrl

	constructor(public http: HttpClient) { }
	
	
	// URL
	urlPath = {
		category: name => this.baseUrl + name,
		categoryItem: (category, itemId) => this.baseUrl + category + "/" + itemId,
		categoryList: () => this.baseUrl,
		findByIds: (category, ids) => {
			let url = this.baseUrl + category + "/findById?";

			ids.forEach(id => {url += ("id=" + id + "&")})
			url.trim();

			return url
		},
		groupCategory: (group, category) => this.baseUrl + "groups/" + group + "/" + category,
	}


	// READ
	getAvailableCategories() :Observable<any> { 
		const url = this.urlPath.categoryList()
		return this.http.get(url)
	}
	
	getCategory(category) :Observable<any> {
		const url = this.baseUrl + category;
		return this.http.get(url)
	}

	getCategoryFilteredByGroup(category, group) :Observable<any> {
		const url = this.urlPath.groupCategory(group, category);
		return this.http.get(url)
	}

	getCategoryItemsWithId(category, ids) :Observable<any> {
		const url = this.urlPath.findByIds(category, ids)
		return this.http.get(url)
	}


	// CREATE
	addNewItemCategory(category, newItem) :Observable<any>  {
		const url = this.urlPath.category(category)
        return this.http.post(url, newItem)
	}


	// UPDATE
	updateItemCategory(category, id, itemChanges) :Observable<any> {
		const url = this.urlPath.categoryItem(category, id)
		return this.http.patch(url, itemChanges)
	}


	// DELETE
	deleteItemCategory(category: string, id: String) :Observable<any> {
		const url = this.urlPath.categoryItem(category, id)
		return this.http.delete(url)
	}

}
