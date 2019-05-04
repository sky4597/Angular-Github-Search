import { AppError } from './common/app-error';
import { BadInput } from './common/bad-input';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { NotFoundError } from './common/not-found-error';
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";


@Injectable()
export class GithubFollowersService  {
public uname : string;
private url:string;

/**
 *
 */
constructor(private http:Http) {
 
  
}

getAll(name:string){
  this.makeNewUrl(name);
  return this.http.get(this.url)
  .map(response=>response.json())
    .catch(this.handleError)
     
    
    
}

makeNewUrl(name:string){
  this.url="https://api.github.com/users/"+name+"/followers"

}

private handleError(error:Response){
  if(error.status==400)
  return Observable.throw(new BadInput(error.json()));

  if(error.status==404)
  return Observable.throw(new NotFoundError());

  return Observable.throw(new AppError(error));

}



}
