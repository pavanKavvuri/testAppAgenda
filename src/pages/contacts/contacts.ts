import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

import { IContact } from '../../models/contact';


@IonicPage()
@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
})

export class ContactsPage {
contacts: IContact[];
emergencyContacts: IContact[];


  constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataProvider) {
    
    this.dataProvider.contacts.subscribe((contacts: IContact[]) =>{
      this.contacts = contacts;
      console.log(this.contacts);
    });
    this.dataProvider.emmergencyContacts.subscribe((emergencyContacts: IContact[]) =>{
      this.emergencyContacts = emergencyContacts;
      console.log(this.emergencyContacts);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactsPage');
  }

}
