import { Resource, EncodedFunction } from "../utils/resource.model"

export class Action extends Resource {
  properties: {
    setup: EncodedFunction
    create: EncodedFunction
    resolve: EncodedFunction
  }
}

/*
"properties": {
    "build": {"body":""},
    "resolve": {"body":"const {target, executor, options, muzzleAnimation} = action;\r\n\r\nconst executorActor = scene.findActorById(executor);\r\nconst targetActor = scene.findActorById(target);\r\n\r\nconsole.log(\"dissing\", target);\r\ntargetActor.giveMalus(\"Dissing\", \"strenght\", {percentage: true, value: 10});\r\ncallback();"},
    "imports": {"body":""}
}
*/