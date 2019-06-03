export class Animation {
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
  label: string
  params: string
  body: string
}
