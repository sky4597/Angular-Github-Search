import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from "./favorite.component";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title:any = "sample title"
  post = {
    title : "Title",
    isFavorite : true

  }

  tweet = {
    body: 'Here is the body of a tweet...',
    isLiked: true,
    likesCount: 10
  }
  

   onFavoriteChanged(eventArgs:{newValue:FavoriteChangedEventArgs}) {
     
    console.log(" isFavorite was toggled: ",eventArgs);
    
  }
 
}