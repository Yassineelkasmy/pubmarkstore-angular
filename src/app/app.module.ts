import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { FooterComponent } from './views/landing/components/footer/footer.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import {
  AngularFireAnalyticsModule,
  UserTrackingService,
} from '@angular/fire/compat/analytics';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './shared/login/login.component';

import { ApplicationService } from './services/application.service';
import { FileUploadService } from './services/file-upload.service';
import { HttpClientModule } from '@angular/common/http';
import { GraphQLModule } from './graph-ql/graph-ql.module';
import { TechsComponent } from './views/landing/components/techs/techs.component';
import { TechiconComponent } from './views/landing/components/techs/techicon/techicon.component';
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
    FooterComponent,
    LoginComponent,
    TechsComponent,
    TechiconComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireAnalyticsModule,
    ReactiveFormsModule,
    FormsModule,
    GraphQLModule,
  ],
  providers: [UserTrackingService, ApplicationService, FileUploadService],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
