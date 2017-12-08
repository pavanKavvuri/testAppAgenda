import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SessionComponent } from './session';

@NgModule({
  declarations: [
    SessionComponent,
  ],
  imports: [
    IonicPageModule.forChild(SessionComponent),
  ],
  exports: [
    SessionComponent
  ]
})
export class SessionComponentModule {}
