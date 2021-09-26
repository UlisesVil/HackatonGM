import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registro/:entity', component: RegisterComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {
    path: 'newsFeed',
    loadChildren: () => import('src/app/news-feed/news-feed.module').then(m => m.NewsFeedModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
