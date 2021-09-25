import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './auth/login/login.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { NewsfeedComponent } from './pages/newsfeed/newsfeed.component';
import { CabeceraComponent } from './pages/newsfeed/components/cabecera/cabecera.component';
import { BootcampCardComponent } from './pages/newsfeed/components/bootcamp-card/bootcamp-card.component';
import { RegisterComponent } from './auth/register/register.component';


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
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
