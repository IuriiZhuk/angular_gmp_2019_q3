import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, RouterEvent, PRIMARY_OUTLET } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { CoursesService } from '../../courses/services/courses.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  public breadcrumbs: string[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CoursesService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.breadcrumbs = ['Courses'];
    this.router.events
      .pipe(filter((event: RouterEvent) => event instanceof NavigationEnd))
      .subscribe( () => {
        console.log(`NavigationEnd`);
        const courseId = this.activatedRoute.snapshot.params.id;
        console.log(`courseId`, courseId);
        if (courseId) {
          const courseTitle: string = this.courseService.getCourseById(courseId).title;
          this.breadcrumbs.push(courseTitle);
        }
      });

  }
}
