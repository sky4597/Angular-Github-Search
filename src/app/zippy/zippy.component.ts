import { Component, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {
  @Input('title') title:string;
  isExpanded:boolean ;

  onClick(){
    this.isExpanded = !this.isExpanded;
  }


}
