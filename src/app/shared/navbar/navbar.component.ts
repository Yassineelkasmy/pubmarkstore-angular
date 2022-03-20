import { Component, HostListener, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@HostListener('window:scroll', ['$event'])
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onWindowScroll() {
    let element = document.querySelector('.navbar') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('navbar-inverse');
    } else {
      element.classList.remove('navbar-inverse');
    }
  }

  onClickAccount() {
    const submitMsg =
      'We are still maintaining our new platform, coming soon 😎';

    Swal.fire({
      text: submitMsg,
      titleText: 'Coming Soon',
      confirmButtonText: 'Ok',
    });
  }
}
