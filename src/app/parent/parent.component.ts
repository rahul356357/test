import { Component, OnInit, Output } from '@angular/core';
import {DataService} from '../data.service';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
 message:string="Hello Beta";
 cmessage:string;
 count:number;
 filedata:Object = {name:"rahul", lastname:"bora", designation:"Project Engineer"};
 constructor(private data :DataService ,private router:Router) { }


  ngOnInit() {
  }
receiveMessage($event){
  console.log($event);
  this.cmessage=$event
}
broadcast(){
 let number=this.count;
number++
console.log(number);
  this.data.changemessage(this.filedata);
  this.router.navigate(['sibling']);
}
}
