import { FormControl } from '@angular/forms';
import { AppComponent } from './../app.component';
import { GithubFollowersService } from './../github-followers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers : any[] =[];
  uname:string =""
  constructor(private service: GithubFollowersService,private parent :AppComponent) { }
  
  ngOnInit() {
    this.parent.title= "Followers appear below!";
    
  }

updateParent(input:FormControl){
  if(input.valid)
  {
    this.parent.title=this.uname+"'s followers!";
    this.service.getAll(this.uname).subscribe(followers=>this.followers=followers);
  }
  else 
  {
    this.parent.title= "Followers appear below!";
    this.followers=[];
  }

  
}
}
