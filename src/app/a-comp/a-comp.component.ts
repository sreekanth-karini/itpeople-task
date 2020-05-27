import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-a-comp',
  templateUrl: './a-comp.component.html',
  styleUrls: ['./a-comp.component.css']
})
export class ACompComponent implements OnInit {

	//Variable declarations
	fullName:string;
	@Output() sendName:EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  /*Passing full name value to main view 
  using @output decorator and eventemitter
  by clicking on button*/

  sendNameToMain(){
  	this.sendName.emit(this.fullName);
  }

}
