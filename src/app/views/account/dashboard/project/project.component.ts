import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/models/Project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
})
export class ProjectComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    public projectService: ProjectService
  ) {
    this.route.paramMap.subscribe((params) => {
      this.projectService.setCurrentUserProject(params.get('name')!);
    });
  }

  ngOnInit(): void {}
}
