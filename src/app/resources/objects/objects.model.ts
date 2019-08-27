import { Resource, EncodedFunction } from "../resource.model"


export class BattleObject extends Resource {
  properties: {
    animations: [string],
    create: EncodedFunction,
    destroy: EncodedFunction,
    setup: EncodedFunction,
    type: string
  }
}
