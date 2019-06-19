export class Resource {
  id: string
  label: string

  deserialize(input: any): this {
    Object.assign(this, input);
    this.id = input._id

    return this;
  }
}


export class EncodedFunction {
  params: string
  body: string
}