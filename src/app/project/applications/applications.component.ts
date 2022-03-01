import { Component, OnInit } from '@angular/core';
import { Application } from 'src/app/models/application/Application';
import { ApplicationService } from 'src/app/services/application.service';
import { ProjectService } from '../project.service';

@Component({
  selector: 'applications',
  templateUrl: './applications.component.html',
})
export class ApplicationsComponent implements OnInit {
  constructor(
    public prjectServcie: ProjectService,
    public applicationService: ApplicationService
  ) {}

  applications?: Application[];

  ngOnInit(): void {
    this.prjectServcie.currentProject?.subscribe((project) => {
      this.applicationService
        .userProjectApplications(project._id)
        .subscribe((apps) => {
          this.applications = apps;
        });
    });
  }
}
