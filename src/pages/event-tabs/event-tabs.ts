import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform, Slides} from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

import { IEvent } from '../../models/event';
import { ISession } from '../../models/session';
/**
 * Generated class for the EventTabsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-event-tabs',
  templateUrl: 'event-tabs.html',
})
export class EventTabsPage {

  event: IEvent;
  jsonString: any;
  eventsCount: any;
  selectedDate: string;
  sessions: ISession[];

  
   @ViewChild('pageSlider') pageSlider: Slides;
   tabs: any = '0';


  constructor(public navCtrl: NavController, public navParams: NavParams, private platform: Platform, public dataProvider: DataProvider) {

     this.dataProvider.event.subscribe((event: IEvent) =>{
      console.log(event);
      
      this.event = event;
      this.jsonString = JSON.stringify(event);
      this.eventsCount = JSON.parse(this.jsonString);
      this.selectedDate = event[0].date;
      this.sessions = event[0].sessions;
    });
    
 }

 

  ionViewDidLoad() {
    console.log('ionViewDidLoad SwipeTabsPage');
   }
        
  selectTab(index) {
    alert(index);
        this.pageSlider.slideTo(index);
        this.selectedDate = this.event[index].date;
        this.sessions = this.event[index].sessions;
  }  

}
