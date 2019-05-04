import { ErrorHandler } from '@angular/core';
import { AppErrorHandler } from './common/app-error.handler';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubFollowersService } from './github-followers.service';




@NgModule({
  declarations: [
    AppComponent,GithubFollowersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [GithubFollowersService,
    {provide:ErrorHandler,useClass:AppErrorHandler}],
  bootstrap: [AppComponent]
})
export class AppModule { }
