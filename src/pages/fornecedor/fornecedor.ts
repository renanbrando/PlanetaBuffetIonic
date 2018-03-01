import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ToastService } from '../../shared/services/toast.service';

@IonicPage()
@Component({
  selector: 'page-fornecedor',
  templateUrl: 'fornecedor.html',
})
export class FornecedorPage {

  fornecedor: any;
  gallery: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toast: ToastService,
    public modalController: ModalController,
    public callNumber: CallNumber,
    public iab: InAppBrowser
  ) { 
    this.fornecedor = {};
  }

  ionViewWillLoad() {
    this.gallery = "photos";
    this.fornecedor = this.navParams.get("fornecedor");
  }

  call() {
    this.callNumber.callNumber(this.fornecedor.phoneNumber, true)
      .then(() => console.log('Launched dialer!'))
      .catch(() => console.log('Error launching dialer'));
  }

  openLink(link) {
    const browser = this.iab.create(link);
  }

  favorite() {
    this.toast.show('Fornecedor favoritado.');
  }

  contract() {
    setTimeout(() => {
      let modal = this.modalController.create("SignaturePage");
      modal.present();
    }, 300);
  }

}
