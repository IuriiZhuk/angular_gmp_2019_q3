export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  isAuth: boolean;
}

export interface AuthUser extends IUser {
  email: string;
  password: string;
}

export interface UserCredential {
  email: string;
  password: string;
}

export class User implements IUser {
  constructor(
    public id: string,
    public firstName: string,
    public lastName: string,
    public isAuth: boolean,
    ) { }
}
