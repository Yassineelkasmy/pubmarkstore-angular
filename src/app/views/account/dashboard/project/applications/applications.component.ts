import { Component, OnInit } from '@angular/core';
import { Application } from 'src/app/models/application/Application';
import { ApplicationService } from 'src/app/services/application.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
})
export class ApplicationsComponent implements OnInit {
  constructor(
    public prjectServcie: ProjectService,
    public applicationService: ApplicationService
  ) {
    this.applicationService
      .userProjectApplications(this.prjectServcie.currentProject?._id!)
      .subscribe((apps) => (this.applications = apps));
  }

  applications?: Application[];

  ngOnInit(): void {}
}
