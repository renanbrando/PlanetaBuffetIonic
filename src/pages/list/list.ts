import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FornecedoresPage } from '../fornecedores/fornecedores';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['wine', 'basket', 'beer', 'bowtie', 'film', 'ios-game-controller-b',
    'headset', 'images', 'musical-notes', 'pint'];

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: this.icons[i-1].toString().toUpperCase(),
        note: 'Fornecedor' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(FornecedoresPage, {
      item: item
    });
  }
}
