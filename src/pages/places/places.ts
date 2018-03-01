import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';

import { buffets } from '../../shared/mocks/data.service'

@IonicPage()
@Component({
  selector: 'page-places',
  templateUrl: 'places.html',
})
export class PlacesPage {

  buffets: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public datePicker: DatePicker) {
    this.buffets = [];
    buffets.forEach(buffet => {
      this.buffets.push({
        name: buffet.name.toLocaleUpperCase(),
        urlImg: buffet.urlImg,
      });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacesPage');
  }

  chooseDate(){
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => {console.log('Got date: ', date); this.navCtrl.setRoot("HomePage");},
      err => {console.log('Error occurred while getting date: ', err); this.navCtrl.setRoot("HomePage");}
    );
  }

}
