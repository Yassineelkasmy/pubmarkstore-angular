import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { ProjectService } from './project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
})
export class ProjectComponent implements OnInit {
  constructor(
    public route: ActivatedRoute,
    public authService: AuthService,
    public router: Router,
    public projectService: ProjectService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.projectService.currentProject = new Observable((obs) => {
        this.projectService
          .getCurrentUserProject(params.get('name')!)
          .subscribe((project) => {
            obs.next(project);
          });
      });
    });
  }
  currentPage(page: string): boolean {
    return this.router.url.split('/').reverse()[0] == page;
  }
}
