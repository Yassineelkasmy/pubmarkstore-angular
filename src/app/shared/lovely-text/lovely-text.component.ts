import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lovely-text',
  templateUrl: './lovely-text.component.html',
})
export class LovelyTextComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() title:string = '';

}
