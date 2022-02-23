import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Application } from '../models/application/Application';

@Injectable({
  providedIn: 'root',
})
export class ApplicationService {
  constructor(private httpClient: HttpClient) {}
  currentApplication?: Application;

  basePath = environment.apis.usersSerice + '/applications/';

  userProjectApplications(projectId: string): Observable<Application[]> {
    return this.httpClient.get<Application[]>(this.basePath + projectId);
  }

  userProjectApplication(
    projectId: string,
    applicationId: string
  ): Observable<Application> {
    return this.httpClient.get<Application>(
      this.basePath + projectId + '/' + applicationId
    );
  }

  //   createProject(request: CreateProjectRequest): Observable<Project> {
  //     return this.httpClient.post<Project>(this.basePath + '/create', request);
  //   }
}
