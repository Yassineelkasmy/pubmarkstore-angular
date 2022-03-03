import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectQuery } from 'src/generated/graphql';
import { ProjectService } from './project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
})
export class ProjectComponent implements OnInit {
  constructor(
    public route: ActivatedRoute,
    public projectService: ProjectService,
    public router: Router
  ) {}

  project?: ProjectQuery;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.projectService.setCurrentUserProject(params.get('name')!);
    });
  }
  currentPage(page: string): boolean {
    return this.router.url.split('/').reverse()[0] == page;
  }
}
