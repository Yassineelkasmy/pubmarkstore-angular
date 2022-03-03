import { Component, OnInit } from '@angular/core';
import { ProjectsGQL, ProjectsQuery } from 'src/generated/graphql';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
})
export class ProjectsComponent implements OnInit {
  projects?: ProjectsQuery['projects'];
  constructor(private projectsGql: ProjectsGQL) {}

  get userHasProjects(): boolean {
    if (this.projects) return this.projects.length >= 1;
    return false;
  }

  ngOnInit(): void {
    this.projectsGql
      .watch(
        {},
        {
          pollInterval: 5000,
        }
      )
      .valueChanges.subscribe((result) => {
        console.log(result);
        this.projects = result.data.projects;
      });
  }
}
