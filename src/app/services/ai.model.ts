import { Resource, EncodedFunction } from "./resource.model"

export class Ai extends Resource {
  properties: {
    body: string
    params: string
  }
}