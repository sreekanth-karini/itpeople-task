import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-comp',
  templateUrl: './main-comp.component.html',
  styleUrls: ['./main-comp.component.css']
})
export class MainCompComponent implements OnInit {

	fullName:string;

  constructor() { }

  ngOnInit(): void {
  }

  /*Getting fullname value from component A using 
  @output decorator and binding it to component B*/

  getNameFromA(data){
  	this.fullName = data;
  }

}
