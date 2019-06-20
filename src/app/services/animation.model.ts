import { Resource } from "./resource.model"

export class Animation extends Resource {
  properties: {
    label: string
    params: string
    body: string
  }
}