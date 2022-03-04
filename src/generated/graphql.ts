import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type Application = {
  __typename?: 'Application';
  _id: Scalars['String'];
  categories?: Maybe<Array<Scalars['String']>>;
  deadline?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  domain?: Maybe<Scalars['String']>;
  estimated_price?: Maybe<Scalars['Float']>;
  features?: Maybe<Array<Scalars['String']>>;
  imported_domain?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  preview?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  projectId: Scalars['String'];
  state?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Float']>;
  type: Scalars['Float'];
  uptime?: Maybe<Scalars['Float']>;
  userId: Scalars['String'];
};

export type CheckDomainNameDto = {
  domainName: Scalars['String'];
};

export type CreateProjectDto = {
  company_name: Scalars['String'];
  company_website: Scalars['String'];
  description: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
  phone: Scalars['String'];
  social_links?: InputMaybe<Array<Scalars['String']>>;
};

export type DomainInfo = {
  __typename?: 'DomainInfo';
  domainAvailability: Scalars['String'];
  domainName: Scalars['String'];
};

export type DomainNameAvailabilityResponse = {
  __typename?: 'DomainNameAvailabilityResponse';
  DomainInfo: DomainInfo;
};

export type Mutation = {
  __typename?: 'Mutation';
  createProject: Project;
  orderWebsite: Application;
};


export type MutationCreateProjectArgs = {
  project: CreateProjectDto;
};


export type MutationOrderWebsiteArgs = {
  order: OrderWebsiteDto;
};

export type OrderWebsiteDto = {
  categories?: InputMaybe<Array<Scalars['String']>>;
  deadline?: InputMaybe<Scalars['String']>;
  description: Scalars['String'];
  domain?: InputMaybe<Scalars['String']>;
  features?: InputMaybe<Array<Scalars['String']>>;
  imported_domain?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  projectId: Scalars['String'];
};

export type Project = {
  __typename?: 'Project';
  _id: Scalars['String'];
  applications?: Maybe<Array<Application>>;
  company_name: Scalars['String'];
  company_website: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
  phone: Scalars['String'];
  social_links?: Maybe<Array<Scalars['String']>>;
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  checkDomain: DomainNameAvailabilityResponse;
  project: Project;
  projectApplications: Array<Application>;
  projects: Array<Project>;
};


export type QueryCheckDomainArgs = {
  domain: CheckDomainNameDto;
};


export type QueryProjectArgs = {
  name: Scalars['String'];
};


export type QueryProjectApplicationsArgs = {
  projectId: Scalars['String'];
};

export type ProjectApplicationsQueryVariables = Exact<{
  projectId: Scalars['String'];
}>;


export type ProjectApplicationsQuery = { __typename?: 'Query', projectApplications: Array<{ __typename?: 'Application', _id: string, projectId: string, userId: string, name: string, description: string, type: number, imported_domain?: string | null, domain?: string | null, categories?: Array<string> | null, features?: Array<string> | null, status?: number | null, state?: number | null, deadline?: string | null, estimated_price?: number | null, price?: number | null, preview?: string | null, uptime?: number | null }> };

export type OrderWebsiteMutationVariables = Exact<{
  order: OrderWebsiteDto;
}>;


export type OrderWebsiteMutation = { __typename?: 'Mutation', orderWebsite: { __typename?: 'Application', _id: string, name: string, description: string } };

export type CheckDomainQueryVariables = Exact<{
  domain: CheckDomainNameDto;
}>;


export type CheckDomainQuery = { __typename?: 'Query', checkDomain: { __typename?: 'DomainNameAvailabilityResponse', DomainInfo: { __typename?: 'DomainInfo', domainAvailability: string } } };

export type ProjectQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type ProjectQuery = { __typename?: 'Query', project: { __typename?: 'Project', _id: string, name: string, userId: string, company_name: string, company_website: string, email: string, phone: string, description: string, social_links?: Array<string> | null, applications?: Array<{ __typename?: 'Application', name: string, description: string, type: number }> | null } };

export type CreateProjectMutationVariables = Exact<{
  project: CreateProjectDto;
}>;


export type CreateProjectMutation = { __typename?: 'Mutation', createProject: { __typename?: 'Project', _id: string, name: string, userId: string, company_name: string, company_website: string, email: string, phone: string, description: string, social_links?: Array<string> | null } };

export type ProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProjectsQuery = { __typename?: 'Query', projects: Array<{ __typename?: 'Project', name: string, description: string }> };

export const ProjectApplicationsDocument = gql`
    query ProjectApplications($projectId: String!) {
  projectApplications(projectId: $projectId) {
    _id
    projectId
    userId
    name
    description
    type
    imported_domain
    domain
    categories
    features
    status
    state
    deadline
    estimated_price
    price
    preview
    uptime
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ProjectApplicationsGQL extends Apollo.Query<ProjectApplicationsQuery, ProjectApplicationsQueryVariables> {
    document = ProjectApplicationsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const OrderWebsiteDocument = gql`
    mutation OrderWebsite($order: OrderWebsiteDto!) {
  orderWebsite(order: $order) {
    _id
    name
    description
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class OrderWebsiteGQL extends Apollo.Mutation<OrderWebsiteMutation, OrderWebsiteMutationVariables> {
    document = OrderWebsiteDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CheckDomainDocument = gql`
    query CheckDomain($domain: CheckDomainNameDto!) {
  checkDomain(domain: $domain) {
    DomainInfo {
      domainAvailability
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CheckDomainGQL extends Apollo.Query<CheckDomainQuery, CheckDomainQueryVariables> {
    document = CheckDomainDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ProjectDocument = gql`
    query Project($name: String!) {
  project(name: $name) {
    _id
    name
    userId
    company_name
    company_website
    email
    phone
    description
    social_links
    applications {
      name
      description
      type
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ProjectGQL extends Apollo.Query<ProjectQuery, ProjectQueryVariables> {
    document = ProjectDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateProjectDocument = gql`
    mutation CreateProject($project: CreateProjectDto!) {
  createProject(project: $project) {
    _id
    name
    userId
    company_name
    company_website
    email
    phone
    description
    social_links
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateProjectGQL extends Apollo.Mutation<CreateProjectMutation, CreateProjectMutationVariables> {
    document = CreateProjectDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ProjectsDocument = gql`
    query Projects {
  projects {
    name
    description
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ProjectsGQL extends Apollo.Query<ProjectsQuery, ProjectsQueryVariables> {
    document = ProjectsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }