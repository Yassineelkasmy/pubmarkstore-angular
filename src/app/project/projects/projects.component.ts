import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/Project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
})
export class ProjectsComponent implements OnInit {
  constructor(private prjectService: ProjectService) {
    this.prjectService
      .userProjects()
      .subscribe((projects) => (this.projects = projects));
  }

  projects: Project[] = [];

  get userHasProjects(): boolean {
    return this.projects.length >= 1;
  }

  ngOnInit(): void {}
}
