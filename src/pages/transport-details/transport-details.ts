import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { IDriver } from '../../models/driver'; 

@IonicPage()
@Component({
  selector: 'page-transport-details',
  templateUrl: 'transport-details.html',
})

export class TransportDetailsPage {

  drivers: IDriver[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataProvider) {
    this.dataProvider.drivers.subscribe((drivers: IDriver[]) =>{
      this.drivers = drivers;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransportDetailsPage');
  }
 
}
