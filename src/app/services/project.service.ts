import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreateProjectRequest } from '../dto/CreateProjectRequest';
import { Project } from '../models/Project';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private httpClient: HttpClient) {}
  currentProject?: Project;

  basePath = environment.apis.usersSerice + '/projects';

  userProjects(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(this.basePath);
  }

  setCurrentUserProject(name: string): void {
    this.httpClient
      .get<Project>(`${this.basePath}/${name}`)
      .subscribe((project) => (this.currentProject = project));
  }

  createProject(request: CreateProjectRequest): Observable<Project> {
    return this.httpClient.post<Project>(this.basePath + '/create', request);
  }
}
