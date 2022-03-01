import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationsComponent } from './applications/applications.component';
import { OrderWebsiteComponent } from './applications/order-website/order-website.component';
import { OverviewComponent } from './overview/overview.component';
import { ProjectComponent } from './project.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: '', redirectTo: 'all' },
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
