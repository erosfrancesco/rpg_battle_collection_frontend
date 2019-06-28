import { Resource } from "./resource.model"
/*
actors: [{
	id: "5cf7dda1b5be12001770ee7d",
	options: {x: 200, y: 200, isEnemy: true}
}], 
events: {
    preload: new Function("scene", preload),
    create : new Function("scene", create),
    update : new Function("scene", update), 
    onWin  : new Function("scene", onWin),
    onLose : new Function("scene", onLose)
} 
*/
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

class EncodedActor {
	id: string
	options: {
		x: number
		y: number
		isEnemy: boolean
		isAlly:  boolean
	}
}

class EncodedFunction {
	body: string
    params: string
}