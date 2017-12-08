import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {  LoadingController } from 'ionic-angular';
/**
 * Generated class for the TouristPlacesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tourist-places',
  templateUrl: 'tourist-places.html',
})
export class TouristPlacesPage {
  private data: any;
  private slides: any = [];
  private start: number = 0;
  private end: number = 5;
  private slides1: any = [];
constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {
      this.data = [
        {
            id: 1,
            title: 'JW Marriott',
            
            color: 'black',
            isSelected: false,
            imgUrl: './assets/icon/marriott.jpg',
            backgroundImgUrl: '',
            outstanding: true
        },
        {
            id: 2,
            title: 'ITPL',
            
            color: 'black',
            isSelected: false,
            imgUrl: './assets/icon/itpl.jpeg',
            outstanding: true,
            backgroundImgUrl: 'https://s-media-cache-ak0.pinimg.com/originals/d2/7b/4f/d27b4fa995194a0c77b8871a326a7c0b.jpg'
        },
        {
            id: 3,
            title: 'Fishermans Wharf',
            
            
            color: 'black',
            isSelected: false,
            imgUrl: './assets/icon/Fisherman.jpg',
            outstanding: true,
            backgroundImgUrl: 'https://i.imgur.com/AMf9X7E.jpg'
        },
        {
            id: 4,
            title: 'UB City',
            
            color: 'black',
            isSelected: false,
            imgUrl:'./assets/icon/ubcity.jpg',
            backgroundImgUrl: 'http://oxygennacdn2.oxygenna.com/wp-content/uploads/2015/06/small.jpg'
        },
        {
            id: 5,
            title: 'Visvesvaraya Museum',
            
         
            color: 'black',
            isSelected: false,
            imgUrl: './assets/icon/museum.jpeg',
            backgroundImgUrl: 'https://newevolutiondesigns.com/images/freebies/google-material-design-wallpaper-1.jpg'
        },
        {
            id: 6,
            title: ' Wonderla',
           
            color: 'black',
            isSelected: false,
            imgUrl: './assets/icon/wonderla.jpg',
            backgroundImgUrl: 'https://i.ytimg.com/vi/GpTrOahC6jI/maxresdefault.jpg'
        },
        {
              id: 7,
            title: ' Taj Fishermans Cove',
          
            color: 'black',
            isSelected: false,
            imgUrl: './assets/icon/cove.jpeg',
            backgroundImgUrl: 'https://s-media-cache-ak0.pinimg.com/736x/c2/bd/3a/c2bd3ae483f9617e6f71bc2a74b60b5a.jpg'
          },
        {
          id: 8,
          title: 'Marina Beach',
         
          color: 'black',
          isSelected: false,
          imgUrl: './assets/icon/marina.jpg',
          backgroundImgUrl: 'https://i.ytimg.com/vi/GpTrOahC6jI/maxresdefault.jpg'
        },
        {
          id: 9,
          title: 'Mahabalipuram',
         
          color: 'black',
          isSelected: false,
          imgUrl: './assets/icon/mahabali.jpg',
          backgroundImgUrl: 'https://i.ytimg.com/vi/GpTrOahC6jI/maxresdefault.jpg'
        },
        
        {
          id: 10,
          title: 'Pulicat Lake & Sanctuary',
         
          color: 'black',
          isSelected: false,
          imgUrl: './assets/icon/lake.jpg',
          backgroundImgUrl: 'https://i.ytimg.com/vi/GpTrOahC6jI/maxresdefault.jpg'
        },
        {
            id: 11,
            title: 'Kanchipuram',
           
            
            color: 'black',
            isSelected: false,
            imgUrl: './assets/icon/kanchi.jpg',
            backgroundImgUrl: 'http://www.vactualpapers.com/web/wallpapers/1-pattern-35-color-schemes-material-design-wallpaper-series-image11/2560x1440.jpg'
        },
      
        {
            id: 12,
            title: 'Arigar Anna Park',
          
            color: 'black',
            isSelected: false,
            imgUrl: './assets/icon/park.jpg',
            backgroundImgUrl: 'https://s-media-cache-ak0.pinimg.com/736x/c2/bd/3a/c2bd3ae483f9617e6f71bc2a74b60b5a.jpg'
        },
          {
              id: 14,
              title: 'User 14',
              description: 'Wait a minute. Wait a minute, Doc. Uhhh...',
              country: 'Spain',
              color: '#e67e22',
              isSelected: false,
              imgUrl: 'http://www.urbanhabitat.com.ar/img/team/14.jpg',
              backgroundImgUrl: 'https://ak2.picdn.net/shutterstock/videos/19300069/thumb/9.jpg'
          },
          {
              id: 15,
              title: 'User 15',
              description: 'Wait a minute. Wait a minute, Doc. Uhhh...',
              country: 'Spain',
              color: '#e74c3c',
              isSelected: false,
              imgUrl: 'http://www.urbanhabitat.com.ar/img/team/14.jpg',
              backgroundImgUrl: 'http://oxygennacdn1.oxygenna.com/wp-content/uploads/2017/01/header-image-6.jpg'
          },

    ];
}


  ionViewDidLoad() {
      this.getCurrentSlides();
  }

  getCurrentSlides() {

      let loading = this.loadingCtrl.create({
          content: 'Please wait...'
      });

      loading.present();

      if (this.start == this.data.length) {
          this.start = 0;
          this.end = 5;
      }
      this.slides = [];
      for (var i = this.start; i <= this.end; i++) {
          this.slides.push(this.data[i]);
          
      }
this.slides1=[]
for (var i = 6; i <= 11; i++) {
  this.slides1.push(this.data[i]);
  
}
      loading.dismiss();

      this.start = this.end + 1;
      if ((this.start + this.end) < this.data.length) this.end = this.start + this.end;
      else this.end = this.data.length - 1;
  }


}
