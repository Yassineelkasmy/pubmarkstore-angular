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
  categories: Array<Scalars['String']>;
  deadline: Scalars['String'];
  description: Scalars['String'];
  domain: Scalars['String'];
  estimated_price?: Maybe<Scalars['Float']>;
  features: Array<Scalars['String']>;
  imported_domain: Scalars['String'];
  name: Scalars['String'];
  preview?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  projectId: Scalars['String'];
  state: Scalars['Float'];
  status: Scalars['Float'];
  type: Scalars['Float'];
  uptime?: Maybe<Scalars['Float']>;
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

export type Mutation = {
  __typename?: 'Mutation';
  createProject: Project;
};


export type MutationCreateProjectArgs = {
  project: CreateProjectDto;
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
  project: Project;
  projects: Array<Project>;
};


export type QueryProjectArgs = {
  id: Scalars['String'];
};

export type ProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProjectsQuery = { __typename?: 'Query', projects: Array<{ __typename?: 'Project', name: string, description: string }> };

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