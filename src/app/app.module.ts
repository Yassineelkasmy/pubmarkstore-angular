import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './views/landing/landing.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NavbarItemComponent } from './shared/navbar-item/navbar-item.component';
import { TopComponent } from './views/landing/components/top/top.component';
import { ExclusiveComponent } from './views/landing/components/exclusive/exclusive.component';
import { FeatureComponent } from './shared/feature/feature.component';
import { ServicesComponent } from './views/landing/components/services/services.component';
import { ServiceComponent } from './shared/service/service.component';
import { LovelyTextComponent } from './shared/lovely-text/lovely-text.component';
import { ContactComponent } from './views/landing/components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
    NavbarItemComponent,
    TopComponent,
    ExclusiveComponent,
    FeatureComponent,
    ServicesComponent,
    ServiceComponent,
    LovelyTextComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
