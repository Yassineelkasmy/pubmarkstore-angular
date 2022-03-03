import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectGQL, ProjectQuery } from 'src/generated/graphql';
import { ProjectService } from '../project.service';

@Component({
  selector: 'overview',
  templateUrl: './overview.component.html',
})
export class OverviewComponent implements OnInit {
  constructor(
    public route: ActivatedRoute,
    public projectService: ProjectService
  ) {}

  ngOnInit(): void {}
}
