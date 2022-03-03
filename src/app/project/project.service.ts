import { Injectable } from '@angular/core';
import { ProjectGQL, ProjectQuery } from 'src/generated/graphql';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private projectGql: ProjectGQL) {}
  public currentProject?: ProjectQuery['project'];

  setCurrentUserProject(name: string) {
    console.log(name);
    this.projectGql
      .watch({ name: name }, { pollInterval: 5000 })
      .valueChanges.subscribe((result) => {
        this.currentProject = result.data.project;
      });
  }
}
