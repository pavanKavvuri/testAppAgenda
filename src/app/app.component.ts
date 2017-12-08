import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ContactsPage } from '../pages/contacts/contacts';
import { EventsPage } from '../pages/events/events';
import { NearByPage } from '../pages/near-by/near-by';
import { TouristPlacesPage } from '../pages/tourist-places/tourist-places';
import { HelpPage } from '../pages/help/help';
import { TransportDetailsPage } from '../pages/transport-details/transport-details';
import { EventTabsPage } from '../pages/event-tabs/event-tabs';


import { DataProvider } from '../providers/data/data';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public dataProvider: DataProvider) {
    this.initializeApp();
 
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Contacts', component: ContactsPage },
      { title: 'About the App', component: HomePage },
      //{ title: 'Logout', component: 'ContactsPage' },
      //{ title: 'Transport Details', component: TransportDetailsPage },
      //{ title: 'Nearby Places', component: NearByPage },
      //{ title: 'Tourist Places', component: TouristPlacesPage },
      //{ title: 'Help', component: HelpPage },
     // { title: 'List', component: ListPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    //alert(page.component);
    this.nav.setRoot(page.component);
  }
}
