import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Application } from '../models/application/Application';
import { DomainNameAvailabilityResponse } from '../models/domain-name/domain-name-availability.response';

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
  checkDomainNameAvailablity(domainName: string) {
    let params = new HttpParams()
      .set('apiKey', environment.domainAvailabilityApiKeys[0])
      .set('domainName', domainName);

    return this.httpClient.get<DomainNameAvailabilityResponse>(
      environment.domainAvailabilityApi,
      {
        params: params,
      }
    );
  }

  //   createProject(request: CreateProjectRequest): Observable<Project> {
  //     return this.httpClient.post<Project>(this.basePath + '/create', request);
  //   }
}
