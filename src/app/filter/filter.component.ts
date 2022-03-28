import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
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
    trigger('upDown', [
      state('down', style({
        transform: 'rotate(0deg)',
      })),
      state('up', style({
        transform: 'rotate(180deg)',
      })),
      transition('down => up', [
        animate('0.5s 0.7s ease-out')
      ]),
      transition('up => down', [
        animate('0.5s 0.7s ease-out')
      ]),
    ]),
  ]
})
export class FilterComponent implements OnInit {

  openState = 'closed'
  arrowState = 'down'

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

  rotateArrow(){
    if(this.arrowState === 'down'){
      this.arrowState = 'up'
    } else {
      this.arrowState = 'down'
    }
  }

}
