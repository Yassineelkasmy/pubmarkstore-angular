import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-techicon',
  templateUrl: './techicon.component.html',
})
export class TechiconComponent implements OnInit {

  constructor() { }

  @Input() icon: string = '';

  ngOnInit(): void {
  }

}
