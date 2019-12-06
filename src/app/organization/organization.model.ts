import { UserRole } from './userRole.model';

export class Organization {
  id: string
  name: string
  userRoles: UserRole[]

  deserialize(input: any, userRoles: UserRole[] = []): this {
    Object.assign(this, input);
    this.id = input._id
    this.userRoles = userRoles

    return this;
  }
}
