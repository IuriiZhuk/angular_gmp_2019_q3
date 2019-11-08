import { CourseDetailsComponent } from './course-details.component';
import { ICourse, Course } from '../../models/course';

describe('CourseDetailsComponent', () => {
  it('raises the pass event when clicked', () => {
    const comp = new CourseDetailsComponent();
    const course: ICourse =  new Course('1', 'Test Course', '1-1-1', '60', 'test description');
    comp.course = course;

    comp.delete.subscribe((id: string) => expect(id).toBe(course.id));
    comp.onDeleteHandler(course.id);

  });
});
