

export interface ICourse {
  id: number;
  name: string;
  date: string;
  length: number;
  description: string;
  authors: IAuthor;
  isTopRated: boolean;
}


export class Course implements ICourse {
  constructor(
      public id: number,
      public name: string,
      public date: string,
      public length: number,
      public description: string,
      public authors: IAuthor,
      public isTopRated: boolean,
  ) {}
}

export interface IAuthor {
  id: number;
  name: string;
}


export enum CoursesConstant {
  LOAD_MORE_START = 4,
  LOAD_MORE_COUNT = 3,
}
