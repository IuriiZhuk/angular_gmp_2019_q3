export interface ICourse {
  id: string;
  title: string;
  creationDate: string;
  duration: string;
  description: string;
  topRated: boolean;
}

export class Course implements ICourse {
  constructor(
   public id: string,
   public title: string,
   public creationDate: string,
   public duration: string,
   public topRated: boolean,
   public description: string) {

    }
}
