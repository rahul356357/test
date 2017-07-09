import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-Siblings2',
  templateUrl: './Siblings2.component.html',
  styleUrls: ['./Siblings2.component.scss']
})
export class Siblings2Component implements OnInit {
   bmessage:any;
   constructor( private data:DataService , private router:Router) { }

  ngOnInit() {
    console.log("inside Siblings2")
    this.data.currentMessage.subscribe(message=>{
      console.log(message)
      this.bmessage=message})
  }
  back(){
    this.router.navigate(['parent']);
  }

}
