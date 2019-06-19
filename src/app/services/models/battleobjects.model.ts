import { Resource, EncodedFunction } from "../utils/resource.model"

export class BattleObjects extends Resource {
  properties: {
    setup: EncodedFunction
    create: EncodedFunction
    destroy: EncodedFunction
    animations: [string]
  }
}

/*
"properties": {
    "animations": [
        {
            "name": "show",
            "body": "const {scene} = battleObject;\n// instead of setTimeout, use scene.time.addEvent\nbattleObject.data.timer = scene.time.addEvent({\n    delay: 500,\n    callback: callback,\n    loop: false\n});"
        }
    ],
    "build": "const {x, y, text} = options;\nconst size = 42;\n\nbattleObject.data.text = scene.stores.BattleObjects.create(\"PhaserText\", {x, y, depth: 100001, text, size});",
    "destroy": "",
    "preload": ""
}
*/