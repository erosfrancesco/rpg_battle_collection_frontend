import { FetchHelper } from '../shared/resource.fetcher'
import { Resource } from './resource.model'

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map, tap} from 'rxjs/operators';

export class ResourceHelper extends FetchHelper {


	// PROPERTIES
	category: string
	filtered: [Resource]
	grouped: [Resource]
	items: [Resource]
	

	// COSTRUCTOR
	constructor(category :string, public http: HttpClient) { 
  		super(http);
  		this.category = category
 	}


	// READ  
	// getAvailableCategories() :Observable<any> { 
	// 	return this.http.get(this.baseUrl)
	// }

	getItems() :Observable<Resource[]> {  
		return super.getCategory(this.category)
		.pipe(map(items => {
				this.items = items.map(item => {
				return new Resource().deserialize(item)
			})
			return this.items
		}))
	}

	getItemsById(id: [String]) :Observable<Resource[]> {
		return super.getCategoryItemsWithId(this.category, id)
		.pipe(map(items => {
			this.filtered = items.map(item => {
			return new Resource().deserialize(item)
		})
		return this.filtered
	}))
	}

	getItemsByGroup(group) :Observable<Resource[]> {
		return super.getCategoryFilteredByGroup(this.category, group)
	}


	// CREATE
	addNewItem(newItem) :Observable<Resource> {
		return super.addNewItemCategory(this.category, newItem).pipe(tap(item => {
			this.items.push(new Resource().deserialize(item))
		}))
	}


	// UPDATE
	updateItemById(id: String, body: Resource) :Observable<Resource> {
		return super.updateItemCategory(this.category, id, body).pipe(tap(item => {
			if (!this.items) {
				return
			}

			const index = this.items.findIndex(i => i.id === id)
			if (index < 0) {
				this.items.push(new Resource().deserialize(item))
				return
			}
			this.items[index] = new Resource().deserialize(item)
		}))
	}


	// DELETE
	deleteItemById(id: String) :Observable<Resource> {
		return super.deleteItemCategory(this.category, id).pipe(tap(removed => {
			if (!this.items) {
				return
			}
			const index = this.items.findIndex(i => i.id === id)
			if (index < 0) {
				return
			}
			this.items.splice(index, 1)
		}))
	}
}
