export interface ICourse {
  id: string;
  title: string;
  creationDate: string;
  duration: number;
  description: string;
  topRated: boolean;
}

export class Course implements ICourse {
  constructor(
   public id: string,
   public title: string,
   public creationDate: string,
   public duration: number,
   public topRated: boolean,
   public description: string) {

    }
}

export interface IAuthor {
  id: number;
  name: string;
}
