import { NgModule } from '@angular/core';
import { ApplicationsComponent } from './applications/applications.component';
import { CreateAppItemComponent } from './applications/create-app-item/create-app-item.component';
import { OrderWebsiteComponent } from './applications/order-website/order-website.component';
import { OverviewComponent } from './overview/overview.component';
import { OverviewItemComponent } from './overview/overview-item/overview-item.component';
import { ProjectComponent } from './project.component';
import { ProjectRoutingModule } from './project-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProjectService } from './project.service';
import { CreateprojectComponent } from './projects/createproject/createproject.component';
import { CreateProjectItemComponent } from './projects/createproject/create-project-item/create-project-item.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectItemComponent } from './projects/createproject/project-item/project-item.component';
import { NewappComponent } from './applications/application/newapp/newapp.component';

@NgModule({
  declarations: [
    ApplicationsComponent,
    CreateAppItemComponent,
    OrderWebsiteComponent,
    OverviewComponent,
    OverviewItemComponent,
    ProjectComponent,
    ProjectsComponent,
    ProjectItemComponent,
    CreateprojectComponent,
    CreateProjectItemComponent,
    NewappComponent,
  ],
  imports: [SharedModule, ProjectRoutingModule, ProjectRoutingModule],
  providers: [ProjectService],
})
export class ProjectModule {}
