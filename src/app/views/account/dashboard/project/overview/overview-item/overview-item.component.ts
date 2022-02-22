import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview-item',
  templateUrl: './overview-item.component.html',
})
export class OverviewItemComponent implements OnInit {
  constructor() {}

  @Input() title?: string;
  @Input() text?: string;
  @Input() image?: string;

  ngOnInit(): void {}
}
