export class Action {
  id: string
  label: string
  properties: Properties

  deserialize(input: any): this {
    Object.assign(this, input);
    this.id = input._id

    return this;
  }
}

/*
"properties": {
    "build": {"body":""},
    "resolve": {"body":"const {target, executor, options, muzzleAnimation} = action;\r\n\r\nconst executorActor = scene.findActorById(executor);\r\nconst targetActor = scene.findActorById(target);\r\n\r\nconsole.log(\"dissing\", target);\r\ntargetActor.giveMalus(\"Dissing\", \"strenght\", {percentage: true, value: 10});\r\ncallback();"},
    "imports": {"body":""}
}
*/
class Properties {
	setup: EncodedFunction
	create: EncodedFunction
	resolve: EncodedFunction
}

class EncodedFunction {
		params: string
		body: string
}