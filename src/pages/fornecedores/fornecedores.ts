import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { fornecedores } from '../../shared/mocks/data.service';

/**
 * Generated class for the FornecedoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fornecedores',
  templateUrl: 'fornecedores.html',
})
export class FornecedoresPage {

  fornecedores: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }

  initializeItems() {
    this.fornecedores = [];
    fornecedores.forEach(fornecedor => {
      this.fornecedores.push({
        name: fornecedor.name.toLowerCase(),
        desc: fornecedor.desc,
        logoImgUrl: fornecedor.logoImgUrl,
        siteUrl: fornecedor.siteUrl,
        facebookUrl: fornecedor.facebookUrl,
        instagramUrl: fornecedor.instagramUrl,
        contactName: fornecedor.contactName,
        ddd: fornecedor.ddd,
        phoneNumber: fornecedor.phoneNumber,
        emailAddress: fornecedor.emailAddress,
        flagActive: fornecedor.flagActive
      });
    });
  }

  onInput(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.fornecedores = this.fornecedores.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
