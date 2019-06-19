import { Resource } from "../utils/resource.model"

export class Sprite extends Resource {
  properties: {
    src: string
    frameWidth: number
    frameHeight: number
    frameX: number
    frameY: number
    scaleX: number
    scaleY: number
  }
}