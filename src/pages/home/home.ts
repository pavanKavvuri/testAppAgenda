import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { IVisitor } from '../../models/visitor';
import { TransportDetailsPage } from '../transport-details/transport-details';
import { ContactsPage } from '../contacts/contacts';
import { EventsPage } from '../events/events';
import { EventTabsPage } from '../event-tabs/event-tabs';

import { NearByPage } from '../near-by/near-by';
import { TouristPlacesPage } from '../tourist-places/tourist-places';
import { HelpPage } from '../help/help';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  visitor : IVisitor;

  constructor(public navCtrl: NavController, public dataProvider: DataProvider) {

    this.dataProvider.visitor.subscribe((visitor: IVisitor) =>{
      this.visitor = visitor;
    });

  }

  help(){
   this.navCtrl.push(HelpPage);
  }
   tourist(){
    this.navCtrl.push(TouristPlacesPage);
  }
   contact(){
    this.navCtrl.push(ContactsPage);
  }
   nearby(){
    this.navCtrl.push(NearByPage);
  }
   transport(){
   this.navCtrl.push(TransportDetailsPage);
  }
   events(){
    //this.navCtrl.push(EventsPage); EventTabsPage
    this.navCtrl.push(EventTabsPage);
  }



}
