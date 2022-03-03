import { Component, Input, OnInit } from '@angular/core';
import { ProjectsQuery } from 'src/generated/graphql';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
})
export class ProjectItemComponent implements OnInit {
  constructor() {}

  @Input() project?: ProjectsQuery['projects'][number];

  ngOnInit(): void {}
}
