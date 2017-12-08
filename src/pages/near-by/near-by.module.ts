import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NearByPage } from './near-by';

@NgModule({
  declarations: [
    NearByPage,
  ],
  imports: [
    IonicPageModule.forChild(NearByPage),
  ],
  exports: [
    NearByPage
  ]
})
export class NearByPageModule {}
