import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { IEvent } from '../../models/event';
import { ISession } from '../../models/session';

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage { 

  event: IEvent;
  jsonString: any;
  eventsCount: any;
  selectedDate: string;
  sessions: ISession[];
  i: number = 0;


  constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataProvider) {
    //this.sessions =[];
    this.dataProvider.event.subscribe((event: IEvent) =>{
      console.log("Event value is");
      
      this.event = event;
      this.jsonString = JSON.stringify(event)
      this.eventsCount = JSON.parse(this.jsonString);
      this.selectedDate = event[0].date;
      this.sessions = event[0].sessions;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
  }

  selectDate(index: number){
    alert(index);
    this.selectedDate = this.event[index].date;
    this.sessions = this.event[index].sessions; 
    console.log(this.sessions);
    //console.log(day);
  }

  getDate(s:number){
    

    this.i += 1;

    if(s == 1) { this.i = this.i - 2 } 
    else if(s == 2) { this.i = this.i }
    //alert(this.i);
    

    if( this.i > 0 && this.i < this.eventsCount.length){
      this.selectedDate = this.event[this.i].date;
      this.sessions = this.event[this.i].sessions;
    }
    else{
      this.i = 0;
      this.selectedDate = this.event[this.i].date;
      this.sessions = this.event[this.i].sessions;
    }

    

    //console.log(this.sessions);

    
    
  }

}
