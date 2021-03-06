import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'project-menu-item',
  templateUrl: './project-menu-item.component.html',
})
export class ProjectMenuItemComponent implements OnInit {
  constructor() {}

  @Input() title?: string;
  @Input() route?: string;

  ngOnInit(): void {}
}
