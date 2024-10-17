import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { authGuard } from './guard/auth.guard';
import { AddComponent } from './pages/dashboard/add/add.component';
import { EditComponent } from './pages/dashboard/edit/edit.component';
import { ListComponent } from './pages/dashboard/list/list.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [authGuard],
        children: [
          {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full',
          },

          {
            path: 'list',
            component: ListComponent,
          },
          {
            path: 'add',
            component: AddComponent,
          },
          {
            path: 'edit/:id',
            component: EditComponent
          }
        ],
      },
    ],
  },
  // {
  //   path: 'login',
  //   component:LoginComponent
  // }
];
