import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-menu-item',
  templateUrl: './project-menu-item.component.html',
})
export class ProjectMenuItemComponent implements OnInit {
  constructor() {}

  @Input() route?: string;
  @Input() title?: string;
  @Input() activeIcon?: string;
  @Input() icon?: string;

  ngOnInit(): void {}
}
