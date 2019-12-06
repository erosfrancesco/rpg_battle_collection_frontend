import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map, tap} from 'rxjs/operators';
import { UserRole } from './userRole.model';

import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserRoleService {

	list: UserRole[] = []
	detail: UserRole

	baseUrl = environment.apiUrl
	resourceUrl = organizationId => this.baseUrl + this.organizationPath + organizationId + "/roles/"
	organizationPath :string = "/"


	// COSTRUCTOR
	constructor(public http: HttpClient) { }


	// HELPERS
	fetch(url :string) :Observable<any> {
		return this.http.get(url)
	}

	post(url :string, body :any) :Observable<any> {
		return this.http.post(url, body)
	}

	patch(url :string, body :any) :Observable<any> {
		return this.http.patch(url, body)
	}

	remove(url :string) :Observable<any> {
		return this.http.delete(url)
	}


	// READ
	getRoles(id: string) :Observable<UserRole[]> {
		return this.fetch(this.resourceUrl(id))
		.pipe(map(items => {
			this.list = items.map(item => new UserRole().deserialize(item) )
			return this.list
		}))
	}
	getRoleDetail(id: string, roleId: string) :Observable<UserRole> {
		return this.fetch(this.resourceUrl(id) + roleId)
		.pipe(tap(item => {
			this.detail = new UserRole().deserialize(item)
			return this.detail
		}))
	}

	
	// CREATE
	invite(id :string, options) :Observable<UserRole[]> {
		return this.post(this.resourceUrl(id) + "invite", options)
		.pipe(map(items => {
			const list = items.map(item => new UserRole().deserialize(item) )
			list.forEach(item => this.list.push(item));
			return list
		}))
	}

	// UPDATE
	update(organizationId :string, id :string, options) :Observable<UserRole> {
		return this.patch(this.resourceUrl(organizationId) + id, options)
		.pipe(tap(item => {
			const resource = new UserRole().deserialize(item)
			const index = this.list.findIndex(item => item.id === id)
	
			if (index > -1) {
				this.list[index] = resource
			} else {
				this.list.push(resource)
			}
			this.detail = resource

			return resource
		}))
	}

	// DELETE
	revoke(id :string, options) :Observable<UserRole[]> {
		return this.post(this.resourceUrl(id) + "revoke", options)
		.pipe(map(items => {
			const indexes = []

			const list = items.map(item => new UserRole().deserialize(item) )

			list.forEach(item => {
				const i = this.list.indexOf(item)
				if (i > -1) {
					indexes.push(i)
				}
			});
			indexes.sort((a, b) => a - b)

			indexes.forEach(i => this.list.splice(i, 1));
			return list
		}))
	}
}
