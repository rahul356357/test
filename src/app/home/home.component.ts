
import { Component, OnInit } from "@angular/core";

@Component({
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html',
})
export class HomeComponent {
 public users :Array<Object>=[];
 public object:Object;
 constructor(){

 }
 ngOnInit(){ 
     this.object={id:'1', name:'Rahul', creation:'12/10/1994', color:'red'}
     this.users.push(this.object);
      this.users.push(this.object);
       this.users.push(this.object);
        this.users.push(this.object);
         this.users.push(this.object);
          this.users.push(this.object);
           this.users.push(this.object);
            this.users.push(this.object);
 }
}
