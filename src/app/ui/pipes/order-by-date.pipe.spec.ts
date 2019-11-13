import { OrderByDatePipe } from './order-by-date.pipe';
import { ICourse } from 'src/app/courses/models/course';

const mockArr: ICourse[] = [
  {
    id: 'id',
    title: 'title',
    creationDate: '01-2-12',
    duration: 59,
    description: 'description',
    topRated: true,
  },
  {
    id: 'id-2',
    title: 'course',
    creationDate: '01-1-12',
    duration: 59,
    description: 'description',
    topRated: false,
  },
];

describe('OrderByDatePipe', () => {
  const pipe = new OrderByDatePipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should sort array by date', () => {
    const result: ICourse[] = [
      {
        id: 'id-2',
        title: 'course',
        creationDate: '01-1-12',
        duration: 59,
        description: 'description',
        topRated: false,
      },
      {
        id: 'id',
        title: 'title',
        creationDate: '01-2-12',
        duration: 59,
        description: 'description',
        topRated: true,
      },
    ];

    expect(pipe.transform(mockArr)).toEqual(result);
  });

});
