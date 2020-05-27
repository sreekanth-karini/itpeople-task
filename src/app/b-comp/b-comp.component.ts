import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-b-comp',
  templateUrl: './b-comp.component.html',
  styleUrls: ['./b-comp.component.css']
})
export class BCompComponent implements OnInit {

	// Fullname value coming from Main view
	@Input() fullName: string;

  constructor() { }

  ngOnInit(): void {
  }

}
