import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})
export class VoterComponent implements OnInit {
  name = 'khalid'
  @Output() voted = new EventEmitter<boolean>()
  didVote = false

  constructor() { }

  ngOnInit(): void {
  }
  vote(agreed:boolean){
     this.voted.emit(agreed);
     this.didVote = true;

  }

}
