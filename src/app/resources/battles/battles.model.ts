import { Resource, EncodedFunction } from "../resource.model"


export class Battle extends Resource {
  properties: {
  	actors: [EncodedActor],
    //events: {
    	preload: EncodedFunction
	    create : EncodedFunction
	    update : EncodedFunction
	    onWin  : EncodedFunction
	    onLose : EncodedFunction
	//} 
  }
}

export class EncodedActor {
	id: string
	options: {
		x: number
		y: number
		isEnemy: boolean
		isAlly:  boolean
	}
}