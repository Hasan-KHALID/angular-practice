import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-parents',
  templateUrl: './hero-parents.component.html',
  styleUrls: ['./hero-parents.component.css']
})
export class HeroParentsComponent implements OnInit {

  heros = 'superman'
  Master = 'ant-man'

  constructor() { }

  ngOnInit(): void {
  }

}
