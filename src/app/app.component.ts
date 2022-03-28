import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'materialWithAnimations';

  dialogVisibility = 'invisible'

  openSidenav(){
    if(this.dialogVisibility === 'visible'){
      this.dialogVisibility = 'invisible'
    } else {
      this.dialogVisibility = 'visible'
    }
  }
  

}
