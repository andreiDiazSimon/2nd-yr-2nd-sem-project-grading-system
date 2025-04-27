import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminSectionComponent } from './components/admin-section/admin-section.component';
import { AdminStudentComponent } from './components/admin-student/admin-student.component';
import { AdminTeacherComponent } from './components/admin-teacher/admin-teacher.component';
import { StudentLayoutComponent } from './layouts/student-layout/student-layout.component';
import { StudentComponent } from './components/student/student.component';
import { TeacherLayoutComponent } from './layouts/teacher-layout/teacher-layout.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { AdminSectionPickComponent } from './components/admin-section-pick/admin-section-pick.component';

import { Routes } from '@angular/router';
import { TeacherSectionPickComponent } from './components/teacher-section-pick/teacher-section-pick.component';
import { TeacherSectionComponent } from './components/teacher-section/teacher-section.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/signin',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'signin',
        component: SignInComponent,
      },
    ],
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        component: AdminComponent,
      },
      {
        path: 'section',
        component: AdminSectionComponent,
      },
      {
        path: 'student',
        component: AdminStudentComponent,
      },
      {
        path: 'teacher',
        component: AdminTeacherComponent,
      },
      {
        path: 'section-pick/:section',
        component: AdminSectionPickComponent,
      },
    ],
  },
  {
    path: 'student',
    component: StudentLayoutComponent,
    children: [
      {
        path: '',
        component: StudentComponent,
      },
    ],
  },
  {
    path: 'teacher',
    component: TeacherLayoutComponent,
    children: [
      {
        path: '',
        component: TeacherComponent,
      },
      { path: 'section', component: TeacherSectionComponent },
      { path: 'section-pick/:section', component: TeacherSectionPickComponent },
    ],
  },
];
