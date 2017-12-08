import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MapServiceProvider } from '../../providers/map-service/map-service';
import { Geolocation } from '@ionic-native/geolocation';
import { Diagnostic } from '@ionic-native/diagnostic';
import { HomePage } from '../../pages/home/home';
import { AlertController } from 'ionic-angular';


/**
 * Generated class for the NearByPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


declare var google;

var infowindow;
@IonicPage()
@Component({
  selector: 'page-near-by',
  templateUrl: 'near-by.html',
})
export class NearByPage {

 

  //options : GeolocationOptions;
  //currentPos : Geoposition;
  places : Array<any> ; 
  //infowindow : any =  new google.maps.InfoWindow();


  @ViewChild('map') mapElement: ElementRef; 
  map: any;

  

  constructor(public navCtrl: NavController, public networkState: MapServiceProvider, public geo: Geolocation,private diagnostic: Diagnostic,private alertCtrl: AlertController) {}

  
ionViewDidLoad() {

    

     if(this.networkState.isOnline()){

       // this.diagnostic.isLocationAuthorized().then(successCallback).catch(errorCallback);
        //this.getmyLocation();
        //this.addMap(12.986584,77.735961);
            this.checkGPSEnablity();
       

    }else{
        this.navCtrl.pop();
        alert("Please connect to Network");
       //this.presentAlert("Network");
       //this.checkGPSEnablity();
       //this.navCtrl.pop();
      //this.navCtrl.setRoot(HomePage);
    }

    let successCallback = (status) => {

            if(status == 'authorized_when_in_use'){  // exclusively for ios
                    this.getmyLocation();
                    //alert(status);
              }
            else if(status == 'high_accuracy'){  // exclusively for android
                    this.getmyLocation();
                    //alert(status);
              }
              //alert(status);
         };
    let errorCallback = (e) => {console.error(e);}

    this.diagnostic.registerLocationStateChangeHandler(successCallback);
    



}

ionViewWillEnter() {  
  infowindow =  new google.maps.InfoWindow();
}

checkGPSEnablity(){
    this.diagnostic.isLocationEnabled().then((state) => {
                                                //alert(state);
                                                if(state == true){ this.getmyLocation(); }
                                                else if(state == false){ 
                                                    //this.navCtrl.pop();
                                                    this.presentAlert("Location"); 
                                                }
                                            }).catch(e => console.error(e));
                                          

}

presentAlert(str: String) {
  let alert = this.alertCtrl.create({
    title: str + 'prompt',
    subTitle: 'Switch to the ' + str +' settings to enable Gps now.',
    buttons:  [     {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                        this.navCtrl.pop();
                        }
                    },
                    {
                        text: 'Ok',
                        handler: () => {
                            if(str == 'Network'){ this.diagnostic.switchToSettings(); }
                            else if(str == 'Location'){ this.diagnostic.switchToLocationSettings(); }
                        
                        }
                    }
             ]
  });
  alert.present();
}

//this.Diagnostic.registerLocationStateChangeHandler(successCallback);


getmyLocation(){

    try{
                this.geo.getCurrentPosition().then((position) => {
            
                            let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                            console.log(position.coords.latitude);
                           // alert("Got location");
                            this.addMap(position.coords.latitude,position.coords.longitude);

                }, (err) => {
                            this.navCtrl.pop();
                            console.log("Error is: ");
                            console.log(err);
                            alert("Error getting location. Try switching on the Location services");
                            //this.addMap(12.986584,77.735961);
                
                });

        }catch(e){
                this.navCtrl.pop();
                alert("Error occured. Please try again");
                //this.addMap(12.986584,77.735961);
            }
    
}

addMap(lat,long){
    //alert(lat);
    //alert(long);
 try{
    let latLng = new google.maps.LatLng(lat, long);

    let mapOptions = {
    center: latLng,
    zoom: 16,
    mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    this.getPlaces(latLng).then((results : Array<any>)=>{
        this.places = results;
        for(let i = 0 ;i < 8 ; i++)   //results.length
        {
            this.createMarker(results[i]);
            console.log(results[i]);
            
        }
    },(status)=>console.log(status));

    }catch(e){
        this.navCtrl.pop();
        alert("Error occured.Please try again");
    } 

}

createMarker(place){

 try{
        let marker = new google.maps.Marker({
        map: this.map,
        draggable:false,
        icon:'./assets/icon/new_map.png',
        animation: google.maps.Animation.DROP,
        position: place.geometry.location
      }); 
    
   

  google.maps.event.addListener(marker, 'click', function(){

            infowindow.setOptions({
                content: '<div><strong>' + place.name + '</strong><br>' +'<br>' +place.vicinity+ '</div>',
                maxWidth:300
            });
            infowindow.open(this.map, marker);
        }); 
    }
        catch(e){
            this.navCtrl.pop();
            alert("Error occured.Please try again");
    }     

   
}


getPlaces(latLng){ 

 try{
    var service = new google.maps.places.PlacesService(this.map);
    
    let request = {
        location : latLng,
        radius : 500 ,
        types: ["restaurant", "food", "point_of_interest"],
        //types: ["shopping_mall"]
    };
    return new Promise((resolve,reject)=>{
        service.nearbySearch(request,function(results,status){
            if(status === google.maps.places.PlacesServiceStatus.OK)
            {
              //alert("Results Ok")
                resolve(results);    
            }else
            {
                reject(status);
            }

        }); 
    });

 }catch(e){
    this.navCtrl.pop();
    alert("Error occured.Please try again");
}

}





}