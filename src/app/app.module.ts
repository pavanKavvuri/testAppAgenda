import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { ContactsPage } from '../pages/contacts/contacts';
import { EventsPage } from '../pages/events/events';
import { NearByPage } from '../pages/near-by/near-by';
import { TouristPlacesPage } from '../pages/tourist-places/tourist-places';
import { HelpPage } from '../pages/help/help';
import { TransportDetailsPage } from '../pages/transport-details/transport-details';
import { EventTabsPage } from '../pages/event-tabs/event-tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataProvider } from '../providers/data/data';
import { HttpModule } from '@angular/http';
import { SessionComponent } from '../components/session/session';
import { ContactComponent } from '../components/contact/contact';

import { Geolocation } from '@ionic-native/geolocation';
import { MapServiceProvider } from '../providers/map-service/map-service';
import { Network } from '@ionic-native/network';
import { Diagnostic } from '@ionic-native/diagnostic';
import {CarouselComponent} from '../components/carousel/carousel'
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ContactsPage,
    EventsPage,
    NearByPage,
    TouristPlacesPage,
    TransportDetailsPage,
    HelpPage,
    SessionComponent,
    ContactComponent,
    CarouselComponent,
    EventTabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    //BrowserAnimationsModule,
   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ContactsPage,
    EventsPage,
    NearByPage,
    TouristPlacesPage,
    TransportDetailsPage,
    HelpPage,
    EventTabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    DataProvider,
    MapServiceProvider,
    Network,
    Diagnostic
  ]
})
export class AppModule { }
