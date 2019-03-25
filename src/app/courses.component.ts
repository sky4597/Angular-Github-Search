import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector:'courses',
    template:`
            <input type = "text" [(ngModel)]="title">
            <br>
            {{ title | titleCase }}
    `
})
export class CoursesComponent{
    isActive = true; 
    email = "me@example.com";
    title = "List of Courses";
    courses ;
    text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

    course = {
        title : "The Complete Angular Course",
        rating : 4.9745,
        students : 30123,
        price : 190.95,
        releaseDate : new Date(2016,3,1)

    }

    colSpan=2;
    imgUrl = "http://lorempixel.com/400/200/"

    constructor(service:CoursesService){
        this.courses = service.getCourses();
    
    
    }

    onDivClicked(){
        console.log("Div was clicked");
    }

    onSave($event){
        $event.stopPropagation();
        console.log(" Button was clicked! ",$event);
    }

    onKeyUp(){

       
        console.log(" User typed this: "+ this.email);

    }

    onClick(){

    }

}