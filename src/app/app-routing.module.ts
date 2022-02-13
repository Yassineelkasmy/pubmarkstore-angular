import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './shared/login/login.component';
import { AccountComponent } from './views/account/account.component';
import { DashboardComponent } from './views/account/dashboard/dashboard.component';
import { LandingComponent } from './views/landing/landing.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  {
    path: 'account',
    component: AccountComponent,
    children: [
      { path: 'login', component: LoginComponent },
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
