import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'; // Updated import for HttpClient

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UserPortalComponent } from './components/user-portal/user-portal.component';
import { AdminportalComponent } from './components/adminportal/adminportal.component';
import { ManagerPortalComponent } from './components/manager-portal/manager-portal.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';           // For template-driven forms
import { ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './components/nav/nav.component';  // For reactive forms
import {WebcamModule} from 'ngx-webcam';
import { CameraComponent } from './components/camera/camera.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserPortalComponent,
    AdminportalComponent,
    ManagerPortalComponent,
    LoginComponent,
    RegisterComponent,
    NavComponent,
    CameraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    ,WebcamModule

  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()) // Updated to use new HttpClient setup
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
