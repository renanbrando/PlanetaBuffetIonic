import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ToastService } from '../../shared/services/toast.service';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  user: User = new User();
  @ViewChild('form') form: NgForm;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public viewCtrl: ViewController,
    public toast: ToastService
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  createAccount() {
    if (this.form.form.valid) {
        this.toast.show('User created.');
        this.navCtrl.setRoot("LoginPage");
    }
  }

}
