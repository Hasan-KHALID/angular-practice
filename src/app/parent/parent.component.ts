import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, OnChanges {
  isChild = false

  constructor() { 
    console.log("parent constructor is called")
  }

  ngOnInit(): void {
    console.log("parent Oninit is called")
  }
  onClick(){
    this.isChild=!this.isChild
  }
  ngOnChanges(changes: SimpleChanges): void {
     console.log("parent ngOnChanges is called")
  }

}
