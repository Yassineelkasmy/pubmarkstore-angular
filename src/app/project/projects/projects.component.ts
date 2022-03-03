import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/Project';
import { ProjectService } from '../project.service';
import { Apollo, gql } from 'apollo-angular';
import { Subscription } from 'rxjs';

const GET_PROJECTS = gql`
  query Projects {
    projects {
      name
      description
    }
  }
`;

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
})
export class ProjectsComponent implements OnInit {
  constructor(private prjectService: ProjectService, private apollo: Apollo) {}
  querySubscription?: Subscription;
  projects: Project[] = [];

  get userHasProjects(): boolean {
    return this.projects.length >= 1;
  }

  ngOnInit(): void {
    this.querySubscription = this.apollo
      .watchQuery<any>({
        query: GET_PROJECTS,
      })
      .valueChanges.subscribe(({ data, loading }) => {
        this.projects = data.projects;
        console.log(data, loading);
      });
  }
}
