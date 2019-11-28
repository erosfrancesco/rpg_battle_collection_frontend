import { ResourceHelper } from '../resources/resource.helper';

export class Topic {
	name :string
	path :string 
	service :ResourceHelper
	
	constructor(name :string, 
		// path :string, 
		service :ResourceHelper){
		this.name = name
		this.path = "/resources/" + service.category
		this.service = service
	}
}