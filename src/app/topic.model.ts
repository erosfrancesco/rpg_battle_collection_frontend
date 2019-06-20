//import { ResourceService } from "./services/utils/resource.service"

export class Topic {
	name :string
	path :string 
	//service :ResourceService
	
	constructor(name :string, path :string){
		//, service :ResourceService) {
		this.name = name
		this.path = path
		//this.service = service
	}
}