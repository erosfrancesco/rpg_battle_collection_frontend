import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment'

export class FetchHelper {

	baseUrl = environment.apiUrl
	resourceUrl = this.baseUrl + "/resources/"
	organizationUrl = this.baseUrl + "/organization/"

	constructor(public http: HttpClient) { }
	
	// URL
	urlPath = {
		category: name => this.resourceUrl + name,
		categoryItem: (category, itemId) => this.urlPath.category(category) + itemId,
		categoryList: () => this.resourceUrl,
		findByIds: (category, ids) => {
			let url = this.urlPath.category(category) + "/findById?";

			ids.forEach(id => {url += ("id=" + id + "&")})
			url.trim();

			return url
		},
		// groupCategory: (group, category) => this.baseUrl + "/groups/" + group + "/" + category,
	}


	// READ
	getAvailableCategories() :Observable<any> { 
		const url = this.urlPath.categoryList()
		return this.http.get(url)
	}
	
	getCategory(category) :Observable<any> {
		const url = this.urlPath.category(category);
		return this.http.get(url)
	}

	// getCategoryFilteredByGroup(category, group) :Observable<any> {
	// 	const url = this.urlPath.groupCategory(group, category);
	// 	return this.http.get(url)
	// }

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
