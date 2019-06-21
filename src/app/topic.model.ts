export class Topic {
	name :string
	path :string 
	service :any
	
	constructor(name :string, path :string, service :any){
		this.name = name
		this.path = path
		this.service = service
	}
}