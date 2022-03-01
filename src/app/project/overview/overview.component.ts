import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/Project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'overview',
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
