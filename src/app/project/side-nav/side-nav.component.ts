import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
})
export class SideNavComponent implements OnInit {
  constructor(
    public route: ActivatedRoute,
    public authService: AuthService,
    public projectService: ProjectService,
    public router: Router
  ) {}

  ngOnInit(): void {}
  currentPage(page: string): boolean {
    return this.router.url.split('/').reverse()[0] == page;
  }
}
