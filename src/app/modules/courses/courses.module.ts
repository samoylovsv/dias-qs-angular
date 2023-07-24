import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CoursePageComponent } from './components/course-page/course-page.component';

@NgModule({
  declarations: [CoursesListComponent, CoursePageComponent],
  imports: [CommonModule],
})
export class CoursesModule {}
