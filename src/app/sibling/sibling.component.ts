import { Component, OnInit, OnDestroy } from '@angular/core';
import {DataService} from '../data.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.scss']
})
export class SiblingComponent implements OnInit, OnDestroy {
   bmessage:any;
   constructor( private data:DataService , private router:Router) { }

  ngOnInit() {
    console.log("inside sibling")
    this.data.currentMessage.subscribe(message=>{
      console.log(message)
      this.bmessage=message})
  }
  back(){
    this.router.navigate(['parent']);
  } 
  ngOnChanges(){
    
  }
  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    
  }
  ngAfterViewChecked() {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    
  }
  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
     this.data.changemessage(this.bmessage);

  }

   
}
