import { Component, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit(): void {}

  googleAuth() {
    this.authService.GoogleAuth();
  }

  githubAuth() {
    this.authService.GithubAuth();
  }
}
