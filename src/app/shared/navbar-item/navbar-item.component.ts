import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-item',
  templateUrl: './navbar-item.component.html',
  styles: [
  ]
})
export class NavbarItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  routeName = '';
  route= '';

 

}
