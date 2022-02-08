import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
})
export class AppComponent {
  title = 'pubmarkstore-angular';
  ngOnInit(){
    AOS.init();
  }
}
