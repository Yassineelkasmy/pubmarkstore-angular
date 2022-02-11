import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
})
export class ServiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() icon:String = ''
  @Input() color:String = ''
  @Input() title:String = ''
  @Input() text:String = ''

}
