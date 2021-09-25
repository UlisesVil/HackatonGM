import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './auth/login/login.component';
import { DialogComponent } from './shared/components/dialog/dialog.component';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { NewsfeedComponent } from './pages/newsfeed/newsfeed.component';
import { CabeceraComponent } from './pages/newsfeed/components/cabecera/cabecera.component';
import { BootcampCardComponent } from './pages/newsfeed/components/bootcamp-card/bootcamp-card.component';
import { RegisterComponent } from './auth/register/register.component';
import { MaterialModule } from './shared/modules/material.module';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    LoginComponent,
    DialogComponent,
    ToolbarComponent,
    FooterComponent,
    SidebarComponent,
    NewsfeedComponent,
    CabeceraComponent,
    BootcampCardComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
