import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
})
export class FeatureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() feature:string = '';

}
