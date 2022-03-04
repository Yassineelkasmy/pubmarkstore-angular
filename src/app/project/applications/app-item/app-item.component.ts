import { Component, Input, OnInit } from '@angular/core';
import { ProjectApplicationsQuery } from 'src/generated/graphql';

@Component({
  selector: 'app-app-item',
  templateUrl: './app-item.component.html',
})
export class AppItemComponent implements OnInit {
  constructor() {}

  @Input() app?: ProjectApplicationsQuery['projectApplications'][number];
  ngOnInit(): void {}
}
