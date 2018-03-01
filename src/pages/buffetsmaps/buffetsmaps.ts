import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
 } from '@ionic-native/google-maps';

@IonicPage()
@Component({
  selector: 'page-buffetsmaps',
  templateUrl: 'buffetsmaps.html',
})
export class BuffetsmapsPage {

  @ViewChild('map') mapElement: ElementRef;
  map: GoogleMap;

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform, private googleMaps: GoogleMaps) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuffetsmapsPage');
    this.loadMap();
  }
    loadMap() {

      let mapOptions: GoogleMapOptions = {
        camera: {
          target: {
            lat: 43.0741904,
            lng: -89.3809802
          },
          zoom: 18,
          tilt: 30
        }
      };
  
      let element = this.mapElement.nativeElement;
      this.map = this.googleMaps.create('map', mapOptions);
  
      // Wait the MAP_READY before using any methods.
      this.map.one(GoogleMapsEvent.MAP_READY)
        .then(() => {
          console.log('Map is ready!');
  
          // Now you can use all methods safely.
          this.map.addMarker({
              title: 'Ionic',
              icon: 'blue',
              animation: 'DROP',
              position: {
                lat: 43.0741904,
                lng: -89.3809802
              }
            })
            .then(marker => {
              marker.on(GoogleMapsEvent.MARKER_CLICK)
                .subscribe(() => {
                  alert('clicked');
                });
            });
  
        });
    }

}
