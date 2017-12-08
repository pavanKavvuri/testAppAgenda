import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { IHelp } from '../../models/help';

@IonicPage()
@Component({
  selector: 'page-help',
  templateUrl: 'help.html',
})
export class HelpPage {
helpContent: IHelp;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: DataProvider) {
    this.dataProvider.helpContent.subscribe((helpContent: IHelp) =>{
      this.helpContent = helpContent;
      console.log(this.helpContent);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelpPage');
  }

}
