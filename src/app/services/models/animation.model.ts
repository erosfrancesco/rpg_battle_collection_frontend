import { Resource } from "../utils/resource.model"

export class Animation extends Resource {
  properties: {
    label: string
    params: string
    body: string
  }
}