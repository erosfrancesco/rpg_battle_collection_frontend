import { Resource, EncodedFunction } from "./resource.model"


export class Actor extends Resource {
  properties: {
    name :string
    canBeEnemy :boolean
    canBeAlly :boolean
    ai :string
    sprite :string
    actorCommands :[string]
    stats : [Stats],
    events: {
      attack: EncodedFunction,
      damage: EncodedFunction,
      ko: EncodedFunction,
      revive: EncodedFunction,
      custom: [{
          name: string,
          value: EncodedFunction
      }]
    }
  }
}

export class Stats {
  name: String
  value: Number
  /*
  health :number
  mana :number
  strenght :number
  defense :number
  velocity :number
  intelligence :number
  magic :number
  /**/
}


/*
  "label": "Kefka",
  "properties": {
      "name": "Kefka",
      "isEnemy": true,
      "AI": "0",
      "sprite": "1",
      "actorCommands": [
          0
      ],
      "stats": {
          "health": 100,
          "mana": 500,
          "strenght": 3,
          "defense": 5,
          "velocity": 4,
          "intelligence": 18,
          "magic": 19
      }
  }
*/
