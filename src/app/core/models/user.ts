export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
}

export class User implements IUser {
  public id: string;
  public firstName: string;
  public lastName: string;
    constructor(
      id: string,
      firstName: string,
      lastName: string,
      ) {
        this.firstName = firstName;
        this.id = id;
        this.lastName = lastName;
    }
}
