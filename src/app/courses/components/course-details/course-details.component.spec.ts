import { CourseDetailsComponent } from "./course-details.component";
import { Course } from '../../models/course';

it('raises the selected event when clicked', () => {
  const component = new CourseDetailsComponent();
  const expectedCourse = new Course('1', 'Test Course', '1-1-1', '60', 'test description');
  component.course = expectedCourse;
  component.delete.subscribe((deletedCOurseId: string) => expect(deletedCOurseId).toBe(expectedCourse.id));
  component.onDeleteHandler(expectedCourse.id);
});
