import { Resource } from "../resource.model"


export class Sprite extends Resource {
  properties: {
    src: string, 
    frameHeight: number, frameWidth: number, 
    frameX: number, frameY: number, 
    scaleX: number, scaleY: number
  }
}
