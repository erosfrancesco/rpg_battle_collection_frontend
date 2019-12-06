import { Injectable } from '@angular/core';
import { Organization } from './organization.model';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map, tap} from 'rxjs/operators';
import { UserRole } from './userRole.model';

import { environment } from 'src/environments/environment';
import { UserRoleService } from './organizationRole.service';


@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

	list: Organization[] = []
	detail: Organization

	baseUrl = environment.apiUrl
	resourceUrl = () => this.baseUrl + "/organization/"


	// COSTRUCTOR
	constructor(public http: HttpClient, public userRoleService :UserRoleService) { 
		this.userRoleService.organizationPath = "/organization/"
	}

	// PROTO
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
		return this.userRoleService.getRoles(id)
		
	}
	getRoleDetail(id: string, roleId: string) :Observable<UserRole> {
		return this.userRoleService.getRoleDetail(id, roleId)
	}

	getItemDetail(id: string) :Observable<Organization> {  
		return this.fetch(this.resourceUrl() + id)
		.pipe(tap(item => {
			return this.getRoles(id).pipe(map(roles => {
				this.detail = new Organization().deserialize(item, roles)
				return this.detail
			}))
		}))
	}
	getItems() :Observable<Organization[]> {  
		return this.fetch(this.resourceUrl())
		.pipe(map(items => {
			this.list = items.map(item => new Organization().deserialize(item) )
			return this.list
		}))
	}


	// CREATE
	create(options) :Observable<Organization> {
		return this.post(this.resourceUrl(), options)
		.pipe(tap(item => {
			const newItem = new Organization().deserialize(item)
			this.list.push(newItem)
			return newItem
		}))
	}

	// UPDATE
	invite(id :string, options) :Observable<Organization> {
		return this.userRoleService.invite(id, options).pipe(map(items => {
			this.detail = new Organization().deserialize(this.detail, items)
			return this.detail
		}))
	}
	revoke(id :string, options) :Observable<Organization> {
		return this.userRoleService.revoke(id, options).pipe(map(items => {
			const indexes = []
			items.forEach(item => {
				const i = this.detail.userRoles.indexOf(item)
				if (i > -1) {
					indexes.push(i)
				}
			});
			indexes.sort((a, b) => a - b)

			indexes.forEach(i => this.detail.userRoles.splice(i, 1));

			return this.detail
		}))
	}


	
	update(id :string, options) :Observable<Organization> {
		return this.patch(this.resourceUrl() + id, options)
		.pipe(tap(item => {
			this.detail = new Organization().deserialize(item, (this.detail && this.detail.userRoles) || [])
			const index = this.list.findIndex(e => e.id === this.detail.id)
			if (index > -1) {
				this.list[index] = this.detail
			}
			return this.detail
		}))
	}


	// DELETE
	delete(id: String) :Observable<Organization> {
		return this.remove(this.resourceUrl() + id)
		.pipe(tap(item => {
			const removed = new Organization().deserialize(item)
			const index = this.list.findIndex(i => i.id === removed.id)
			if (index > -1) {
				this.list.splice(index, 1)
			}
			
			return removed
		}))
	}
}
