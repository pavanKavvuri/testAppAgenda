import { Component, Input } from '@angular/core';
import { IContact } from '../../models/contact';

@Component({
  selector: 'contact',
  templateUrl: 'contact.html'
})
export class ContactComponent {
  @Input() contact:IContact;


  constructor() {
    console.log('Hello ContactComponent Component');
    
  }

}
