import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Platform } from 'ionic-angular';
import { Network } from '@ionic-native/network';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import {Alert} from 'ionic-angular';
/*
  Generated class for the MapServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
 

declare var Connection;

@Injectable()
export class MapServiceProvider {

  onDevice: boolean;

  constructor( public http: Http, public platform: Platform, private network: Network){
    this.onDevice = this.platform.is('cordova');
}




  isOnline(): boolean {
    if (this.onDevice && this.network.type) {
      return this.network.type !== Connection.NONE;
    } else {
      return navigator.onLine;
    }
  }

  isOffline(): boolean {
    if (this.onDevice && this.network.type) {
      return this.network.type === Connection.NONE;
    } else {
      return !navigator.onLine;
    }
  }


  
}
