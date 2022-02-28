import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CheckDomainNameRequest } from '../dto/CheckDomainName.request';
import { OrderWebsiteRequest } from '../dto/order-website.request';
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

  checkDomainNameAvailablity(req: CheckDomainNameRequest) {
    return this.httpClient.post<DomainNameAvailabilityResponse>(
      this.basePath + 'checkdomain',
      req
    );
  }

  orderWebsite(req: OrderWebsiteRequest) {
    return this.httpClient.post(this.basePath + 'orderwebsite', req);
  }
}
