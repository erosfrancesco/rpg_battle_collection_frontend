export class Ai {
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
  waterfall: [Waterfall]
  //body: [string]
  //params: [string]
}


class Waterfall {
  body: string
  params: string
}