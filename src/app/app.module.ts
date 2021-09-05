import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
    {
      path:'heroes', component: HeroesComponent
    },
    {
      path:'dashboard',component: DashboardComponent
    },
    {
      path:'',redirectTo:'/dashboard', pathMatch:'full'
    },
    {
      path:'details/:id',component: HeroDetailComponent
    }
  ])
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
