import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-menu-item',
  templateUrl: './project-menu-item.component.html',
})
export class ProjectMenuItemComponent implements OnInit {
  constructor() {}

  @Input() title?: string;
  @Input() route?: string;
  @Input() icon?: string;
  @Input() activeIcon?: string;

  ngOnInit(): void {}
}
