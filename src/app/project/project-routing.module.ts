import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewappComponent } from './applications/application/newapp/newapp.component';
import { ApplicationsComponent } from './applications/applications.component';
import { OrderWebsiteComponent } from './applications/order-website/order-website.component';
import { OverviewComponent } from './overview/overview.component';
import { ProjectComponent } from './project.component';
import { CreateprojectComponent } from './projects/createproject/createproject.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: '', redirectTo: 'all' },
  { path: 'create', component: CreateprojectComponent },
  { path: 'all', component: ProjectsComponent },

  {
    path: ':name',
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
        path: 'newapp',
        component: NewappComponent,
      },
      {
        path: 'createwebapp',
        component: OrderWebsiteComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectRoutingModule {}
