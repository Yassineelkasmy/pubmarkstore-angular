import { Component, OnInit } from '@angular/core';
import {
  ProjectApplicationsGQL,
  ProjectApplicationsQuery,
} from 'src/generated/graphql';
import { ProjectService } from '../project.service';

@Component({
  selector: 'applications',
  templateUrl: './applications.component.html',
})
export class ApplicationsComponent implements OnInit {
  constructor(
    public projectServcie: ProjectService,
    private projectAppsGql: ProjectApplicationsGQL
  ) {
    this.projectAppsGql.watch();
  }

  apps?: ProjectApplicationsQuery['projectApplications'];
  ngOnInit(): void {
    this.projectServcie.currentProject$?.subscribe((project) => {
      if (project) {
        this.projectAppsGql
          .watch({
            projectId: project._id,
          })
          .valueChanges.subscribe(
            (result) => (this.apps = result.data.projectApplications)
          );
      }
    });
  }
}
