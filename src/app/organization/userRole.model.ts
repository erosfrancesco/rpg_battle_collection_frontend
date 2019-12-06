export class UserRole {
  id: string
  organization: string
  roles: number
  user: string

  deserialize(input: any): this {
    Object.assign(this, input);
    this.id = input._id

    return this;
  }
}
