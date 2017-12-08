import { Component, Input } from '@angular/core';
import { ISession } from '../../models/session';


@Component({
  selector: 'session',
  templateUrl: 'session.html'
})
export class SessionComponent {

  @Input() session:ISession; 

  constructor() {
    console.log('Hello SessionComponent Component');
    
  }

}
