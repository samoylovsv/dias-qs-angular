import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutSitePcComponent } from './modules/layout/components/layout-site-pc/layout-site-pc.component';
import { CoursesListComponent } from './modules/courses/components/courses-list/courses-list.component';
import { CoursePageComponent } from './modules/courses/components/course-page/course-page.component';
import { LoginPageComponent } from './modules/login/components/login-page/login-page.component';
import { LayoutSiteAppComponent } from './modules/layout/components/layout-site-app/layout-site-app.component';
import { LayoutEntryPcComponent } from './modules/layout/components/layout-entry-pc/layout-entry-pc.component';
import { LayoutEntryAppComponent } from './modules/layout/components/layout-entry-app/layout-entry-app.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/courses',
    pathMatch: 'full',
  },

  //Site routes goes here
  {
    path: '',
    component: LayoutSitePcComponent,
    children: [
      { path: 'courses', component: CoursesListComponent },
      { path: 'course/:id', component: CoursePageComponent },
    ],
  },
  {
    path: '',
    component: LayoutEntryPcComponent,
    children: [{ path: 'login', component: LoginPageComponent }],
  },

  // App routes goes here
  {
    path: 'm',
    component: LayoutSiteAppComponent,
    children: [
      { path: 'courses', component: CoursesListComponent },
      { path: 'course/:id', component: CoursePageComponent },
    ],
  },
  {
    path: 'm',
    component: LayoutEntryAppComponent,
    children: [{ path: 'login', component: LoginPageComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
