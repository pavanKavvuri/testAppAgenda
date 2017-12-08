import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactComponent } from './contact';

@NgModule({
  declarations: [
    ContactComponent,
  ],
  imports: [
    IonicPageModule.forChild(ContactComponent),
  ],
  exports: [
    ContactComponent
  ]
})
export class ContactComponentModule {}
