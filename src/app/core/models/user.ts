export interface IUser {
  id: number;
  token: string;
  name: NameModel;
  login: string;
  password: string;
}

export interface AuthUser extends IUser {
  email: string;
  password: string;
}

export interface UserCredential {
  email: string;
  password: string;
}

// export class User implements IUser {
//   constructor(
//     public id: string,
//     public firstName: string,
//     public lastName: string,
//     public isAuth: boolean,
//     ) { }
// }

export interface LoginRequestModel {
  login: string;
  password: string;
}

export interface TokenRequestModel {
  token: string;
}

export interface NameModel {
  firstName: string;
  lastName: string;
}
