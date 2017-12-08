import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { NavController } from 'ionic-angular';
import {HomePage} from '../../pages/home/home';

//Models for Data 
import { IVisitor } from '../../models/visitor';
import { IDriver } from '../../models/driver';
import { IContact } from '../../models/contact';
import { IData } from '../../models/wholeData';
import { IHelp } from '../../models/help';
import { IEvent } from '../../models/event';

import { MapServiceProvider } from '../../providers/map-service/map-service';

//import { IEmergency_Contact } from '../../models/emergency_contact';
//import { IDay } from '../../models/day';
//import { ISession } from '../../models/session';
@Injectable()
export class DataProvider {

  staticData: IData;
  dynamicData: IData;

  _visitor: BehaviorSubject<IVisitor>;
  _drivers: BehaviorSubject<IDriver[]>;
  _contacts: BehaviorSubject<IContact[]>;
  _event: BehaviorSubject<IEvent>;
  _emmergencyContacts: BehaviorSubject<IContact[]>;
  _helpContent: BehaviorSubject<IHelp>;

  constructor(public http: Http, public networkState: MapServiceProvider) {
    console.log('Hello DataProvider Provider');

     

    this._visitor = <BehaviorSubject<IVisitor>>new BehaviorSubject<IVisitor>({});
    this._drivers = <BehaviorSubject<IDriver[]>>new BehaviorSubject<IDriver[]>([]);
    this._contacts = <BehaviorSubject<IContact[]>>new BehaviorSubject<IContact[]>([]); //send empty array initially
    this._emmergencyContacts = <BehaviorSubject<IContact[]>>new BehaviorSubject<IContact[]>([]); //send empty array initially
    this._event = <BehaviorSubject<IEvent>>new BehaviorSubject<IEvent>({}); //send empty array initially
    this._helpContent = <BehaviorSubject<IHelp>>new BehaviorSubject<IHelp>({}); //send empty array initially

    this.loadStaticData();
    //this.loadDynamicData();
  
  }


  /**
  * Get static data from the JSON and Decrypt
  */
  
  loadStaticData() {

    this.http.get('./assets/data/StaticData.json').subscribe(data => {

      this.staticData = <IData>JSON.parse(data.text());
      //console.log(JSON.stringify(this.staticData));

      this._visitor.next(Object.assign({}, this.staticData).visitor);
      this._drivers.next(Object.assign({}, this.staticData).transport_details);
      this._contacts.next(Object.assign({}, this.staticData).contacts);
      this._emmergencyContacts.next(Object.assign({}, this.staticData).emergency_contacts);
      this._event.next(Object.assign({}, this.staticData).events);
      this._helpContent.next(Object.assign({}, this.staticData).help_content);
    });
  }

  loadDynamicData() {

    this.http.get('http://192.168.1.196:5000/myagenda').subscribe(data => {

      this.staticData = <IData>JSON.parse(data.text());
      console.log(JSON.stringify(this.staticData));

      this._visitor.next(Object.assign({}, this.staticData).visitor);
      this._drivers.next(Object.assign({}, this.staticData).transport_details);
      this._contacts.next(Object.assign({}, this.staticData).contacts);
      this._emmergencyContacts.next(Object.assign({}, this.staticData).emergency_contacts);
      this._event.next(Object.assign({}, this.staticData).events);
      this._helpContent.next(Object.assign({}, this.staticData).help_content);
    });
  }


   


  /**
 * getter for visitor data as observable
 */
  get visitor() {
    return this._visitor.asObservable();
  }

  /**
 * getter for drivers data as observable
 */
  get drivers() {
    return this._drivers.asObservable();
  }

  /**
 * getter for contacts data as observable
 */
  get contacts() {
    return this._contacts.asObservable();
  }

  /**
 * getter for Emergency contacts data as observable
 */
  get emmergencyContacts() {
    return this._emmergencyContacts.asObservable();
  }

  /**
 * getter for Events data as observable
 */
  get event() {
    return this._event.asObservable();
  }

  /**
* getter for Help data as observable
*/
  get helpContent() {
    return this._helpContent.asObservable();
  }



}
