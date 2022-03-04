import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ProjectGQL, ProjectQuery } from 'src/generated/graphql';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private projectGql: ProjectGQL) {}
  public currentProject$?: Observable<ProjectQuery['project']>;

  setCurrentUserProject(name: string) {
    console.log(name);
    this.currentProject$ = this.projectGql
      .watch({ name: name }, { pollInterval: 5000 })
      .valueChanges.pipe(map(({ data }) => data.project));
  }
}
