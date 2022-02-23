import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-app-item',
  templateUrl: './create-app-item.component.html',
})
export class CreateAppItemComponent implements OnInit {
  constructor() {}

  @Input() title?: string;
  @Input() icon?: string;

  ngOnInit(): void {}
}
