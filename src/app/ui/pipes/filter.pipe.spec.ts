import { FilterPipe } from './filter.pipe';
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
    creationDate: '01-2-12',
    duration: 59,
    description: 'description',
    topRated: false,
  },
];

describe('FilterPipe', () => {
  const pipe = new FilterPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should filter array', () => {
    const result: ICourse[] = [
      {
        id: 'id',
        title: 'title',
        creationDate: '01-2-12',
        duration: 59,
        description: 'description',
        topRated: true,
      },
    ];

    expect(pipe.transform(mockArr, 'title')).toEqual(result);
  });

  it('should return empty  array', () => {
    const result: ICourse[] = [];

    expect(pipe.transform(mockArr, 'abc')).toEqual(result);
  });

});
