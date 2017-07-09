import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {DataService} from '../data.service';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
@Input() message:string;
          cmessage:string ="Hello Papa";
          bmessage:any;
@Output() messageEvent = new EventEmitter<string>();
  constructor(private data: DataService) { }

  ngOnInit() {
  this.data.currentMessage.subscribe(message=>{
    this.bmessage= message;
  })
  }

  sendMessage(){ 
    this.messageEvent.emit(this.cmessage)
  }

}
