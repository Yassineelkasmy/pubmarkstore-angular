import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreateProjectRequest } from '../dto/CreateProject.request';
import { Project } from '../models/Project';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private httpClient: HttpClient) {}
  currentProject?: Observable<Project>;

  basePath = environment.apis.usersSerice + '/projects';

  userProjects(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(this.basePath);
  }

  getCurrentUserProject(name: string): Observable<Project> {
    return this.httpClient.get<Project>(`${this.basePath}/${name}`);
  }

  createProject(request: CreateProjectRequest): Observable<Project> {
    return this.httpClient.post<Project>(this.basePath + '/create', request);
  }
}
