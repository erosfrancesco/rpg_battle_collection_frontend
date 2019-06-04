export class Command {
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
  action: EncodedFunction
}

export class EncodedFunction {
  params: string
  body: string
}