export interface IUser {
  id: number;
  fakeToken: string;
  name: NameModel;
  login: string;
  password: string;
}

export class User implements IUser {
  constructor(
    public id: number,
    public fakeToken: string,
    public name: NameModel,
    public login: string,
    public password: string,
    ) { }
}

export interface LoginRequestModel {
  login: string;
  password: string;
}

export interface TokenRequestModel {
  token: string;
}

export interface NameModel {
  first: string;
  last: string;
}
