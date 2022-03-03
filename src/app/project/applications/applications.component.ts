import { Component, OnInit } from '@angular/core';
import { Application } from 'src/app/models/application/Application';
import { ApplicationService } from 'src/app/services/application.service';
import { ProjectService } from '../project.service';

@Component({
  selector: 'applications',
  templateUrl: './applications.component.html',
})
export class ApplicationsComponent implements OnInit {
  constructor(public projectServcie: ProjectService) {}

  ngOnInit(): void {}
}
