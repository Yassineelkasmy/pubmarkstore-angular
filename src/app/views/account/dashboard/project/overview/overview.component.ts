import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/Project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
})
export class OverviewComponent implements OnInit {
  constructor(public projectService: ProjectService) {}

  project?: Project;
  ngOnInit(): void {
    this.projectService.currentProject?.subscribe(
      (project) => (this.project = project)
    );
  }
}
