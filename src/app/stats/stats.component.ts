import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
  animations: [
    trigger('openClosed', [
      state('open', style({
        height: '350px',
      })),
      state('closed', style({
        height: '50px',
      })),
      transition('open => closed', [
        animate('0.5s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ]
})
export class StatsComponent implements OnInit {

  openState = 'closed'

  constructor() { }

  ngOnInit(): void {
  }

  open(){
    if(this.openState === 'open'){
      this.openState = 'closed'
    } else {
      this.openState = 'open'
    }
  }

}
