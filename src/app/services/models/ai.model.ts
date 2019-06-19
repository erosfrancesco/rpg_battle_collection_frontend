import { Resource, EncodedFunction } from "../utils/resource.model"

export class Ai extends Resource {
  properties: {
    body: string
    params: string
  }
}