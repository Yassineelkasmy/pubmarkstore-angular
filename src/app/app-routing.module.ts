import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { create } from 'domain';
import { AuthGuard } from './guards/auth.guard';
import { UnAuthGuard } from './guards/unauth.guard';
import { LoginComponent } from './shared/login/login.component';
import { AccountComponent } from './views/account/account.component';
import { DashboardComponent } from './views/account/dashboard/dashboard.component';
import { ApplicationsComponent } from './views/account/dashboard/project/applications/applications.component';
import { OrderWebsiteComponent } from './views/account/dashboard/project/applications/create-website/order-website.component';
import { OverviewComponent } from './views/account/dashboard/project/overview/overview.component';
import { ProjectComponent } from './views/account/dashboard/project/project.component';
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
          {
            path: 'project/:name',
            component: ProjectComponent,
            children: [
              {
                path: 'overview',
                component: OverviewComponent,
              },
              {
                path: 'applications',
                component: ApplicationsComponent,
              },
              {
                path: 'createwebapp',
                component: OrderWebsiteComponent,
              },
            ],
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
