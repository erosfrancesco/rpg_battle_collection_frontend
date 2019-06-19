import { Resource, EncodedFunction } from "../utils/resource.model"

export class Command extends Resource {
  properties: {
    label: string
    action: EncodedFunction
  }
}