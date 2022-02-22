import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/models/Project';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
})
export class ProjectItemComponent implements OnInit {
  constructor() {}

  @Input() project?: Project;

  ngOnInit(): void {}
}
