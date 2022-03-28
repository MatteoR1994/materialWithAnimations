import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
  animations: [
    trigger('visibleInvisible', [
      state('visible', style({
        right: '0px',
      })),
      state('invisible', style({
        right: '-600px',
      })),
      transition('visible => invisible', [
        animate('0.5s')
      ]),
      transition('invisible => visible', [
        animate('0.5s')
      ]),
    ]),
  ]
})
export class DrawerComponent implements OnInit {

@Input() visibilityState = 'invisible'

  constructor() { }

  ngOnInit(): void {
  }

  // filterOpenState = 'closed'

  // openFilter(){
  //   if(this.filterOpenState === 'open'){
  //     this.filterOpenState = 'closed'
  //   } else {
  //     this.filterOpenState = 'open'
  //   }
  // }
  

}
