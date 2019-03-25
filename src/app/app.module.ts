import { ErrorHandler } from '@angular/core';
import { AppErrorHandler } from './common/app-error.handler';
import { SignupFormComponent } from './signup-form/signup-form/signup-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { CoursesService } from './courses.service';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { NewCourseComponent } from './new-course/new-course.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './post.service';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubFollowersService } from './github-followers.service';




@NgModule({
  declarations: [
    AppComponent, ContactFormComponent, NewCourseFormComponent,SignupFormComponent, NewCourseComponent, ChangePasswordComponent, PostsComponent, GithubFollowersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [CoursesService,PostService,GithubFollowersService,
    {provide:ErrorHandler,useClass:AppErrorHandler}],
  bootstrap: [AppComponent]
})
export class AppModule { }
