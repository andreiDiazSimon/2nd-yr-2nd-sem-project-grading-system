import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component'
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AdminComponent } from './components/admin/admin.component';

import { Routes } from '@angular/router';
import { AdminSectionComponent } from './components/admin-section/admin-section.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/signin', // Redirect to /auth/signin when the path is empty
    pathMatch: 'full', // Ensure the full path is matched
  },
  {
    path: 'auth',
    component: AuthLayoutComponent, // This is your auth layout component
    children: [
      {
        path: 'signin', // Child route for sign-in
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
      component: AdminComponent
    },
    {
      path: 'section',
      component: AdminSectionComponent
    }
  ]
}
];
