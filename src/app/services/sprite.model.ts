export class Sprite {
  id: string
  label: string
  properties: Properties

  deserialize(input: any): this {
    Object.assign(this, input);
    this.id = input._id

    return this;
  }
}


class Properties {
  src: string
  frameWidth: number
  frameHeight: number
  frameX: number
  frameY: number
  scaleX: number
  scaleY: number
}