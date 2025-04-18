import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminSectionComponent } from './components/admin-section/admin-section.component';
import { AdminStudentComponent } from './components/admin-student/admin-student.component';

import { Routes } from '@angular/router';

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
    ],
  },
];
