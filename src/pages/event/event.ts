import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { eventType } from '../../shared/mocks/data.service'

@IonicPage()
@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
})
export class EventPage {

  events: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.events = [];
    eventType.forEach(event => {
      this.events.push({
        desc: event.desc.toLocaleUpperCase(),
        img: event.img,
        places: event.places
      });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventPage');
  }

  navigatePlaces(){
    this.navCtrl.push("PlacesPage");
  }

}
