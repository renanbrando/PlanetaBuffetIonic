import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

import { serviceSegment } from '../../shared/mocks/data.service'

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  list: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.list = [];
    serviceSegment.forEach(service => {
      this.list.push({
        name: service.name.toLowerCase(),
        img: service.img
      });
    });
  }

  itemTapped(item) {
    this.navCtrl.push("FornecedoresPage", {
      item: item
    });
  }
}
