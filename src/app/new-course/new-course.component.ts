import { Validators } from '@angular/forms';
import { UsernameValidators } from './../signup-form/signup-form/username.validators';
import { FormControl, FormArray, FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component} from '@angular/core';

@Component({
  selector: 'new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})
export class NewCourseComponent {

form ;


constructor(fb : FormBuilder){

 this.form = fb.group({
    name : ['',Validators.required],
    contact : fb.group({
      email : [],
      phone : []
    }),
    topics : fb.array([])
  })

}
// addTopic(topic:HTMLInputElement){
//   this.topics.push(new FormControl(topic.value));
//   topic.value = '';
// }

// logger(vals){
//   console.log(vals);

// }

// get topics(){
//   return this.form.get('topics') as FormArray;
// }

// removeTopic(topic : FormControl){
//   let index = this.topics.controls.indexOf(topic);
//   this.topics.removeAt(index);


// }

}

