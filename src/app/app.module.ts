import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { CompanyRegisterComponent } from './components/company-register/company-register.component';
import { NewsfeedCompanyComponent } from './components/newsfeed-company/newsfeed-company.component';
import { NewsfeedUserComponent } from './components/newsfeed-user/newsfeed-user.component';
import { NewsfeedUserSubscribeComponent } from './components/newsfeed-user-subscribe/newsfeed-user-subscribe.component';
import { NewsfeedUserCancelComponent } from './components/newsfeed-user-cancel/newsfeed-user-cancel.component';
import { NewsfeedCompanyCreateComponent } from './components/newsfeed-company-create/newsfeed-company-create.component';
import { NewsfeedCompanyEditComponent } from './components/newsfeed-company-edit/newsfeed-company-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserRegisterComponent,
    CompanyRegisterComponent,
    NewsfeedCompanyComponent,
    NewsfeedUserComponent,
    NewsfeedUserSubscribeComponent,
    NewsfeedUserCancelComponent,
    NewsfeedCompanyCreateComponent,
    NewsfeedCompanyEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
