import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnAuthGuard } from './guards/unauth.guard';
import { LoginComponent } from './shared/login/login.component';
import { LandingComponent } from './views/landing/landing.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  {
    path: 'project',
    loadChildren: () =>
      import('./project/project.module').then((m) => m.ProjectModule),
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [UnAuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
