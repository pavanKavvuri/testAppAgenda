import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TouristPlacesPage } from './tourist-places';
import { CarouselComponent } from '../../components/carousel/carousel';
@NgModule({
  declarations: [
    TouristPlacesPage,
  ],
  imports: [
    IonicPageModule.forChild(TouristPlacesPage),
  ],
  exports: [
    TouristPlacesPage,
    CarouselComponent
  ]
})
export class TouristPlacesPageModule {}
