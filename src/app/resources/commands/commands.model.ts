import { Resource, EncodedFunction } from "../resource.model"


export class Command extends Resource {
  properties: {
    label: string,
    action: EncodedFunction
  }
}
