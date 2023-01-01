import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnDestroy,OnChanges {
  counter = 0
  interval: any
  changeName=""

  constructor() {
    console.log("child constructor is called")
   }

  ngOnInit(): void {
    console.log("child oninit is called")
    this.interval= setInterval(()=>{
      this.counter=this.counter+1
      console.log(this.counter)
    },1000)
  }
  ngOnDestroy(): void {
    clearInterval(this.interval)
    console.log("child OnDestroy is called")

  }
  ngOnChanges(){
     console.log("child ngOnChanges is called")
  }

}
