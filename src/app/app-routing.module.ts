import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { create } from 'domain';
import { AuthGuard } from './guards/auth.guard';
import { UnAuthGuard } from './guards/unauth.guard';
import { LoginComponent } from './shared/login/login.component';
import { AccountComponent } from './views/account/account.component';
import { DashboardComponent } from './views/account/dashboard/dashboard.component';
import { CreateprojectComponent } from './views/account/dashboard/projects/createproject/createproject.component';
import { ProjectsComponent } from './views/account/dashboard/projects/projects.component';
import { LandingComponent } from './views/landing/landing.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  {
    path: 'account',
    component: AccountComponent,
    children: [
      { path: 'login', component: LoginComponent, canActivate: [UnAuthGuard] },
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: 'projects',
            component: ProjectsComponent,
          },
        ],
      },
      {
        path: 'dashboard/projects/create',
        canActivate: [AuthGuard],
        component: CreateprojectComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
