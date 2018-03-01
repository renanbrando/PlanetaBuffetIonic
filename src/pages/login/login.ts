import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user';
import { ToastService } from '../../shared/services/toast.service';
import { users } from '../../shared/mocks/data.service'

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user: User = new User();
  @ViewChild('form') form: NgForm;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController,
    private toast: ToastService
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  ionViewWillLoad() {

  }

  login() {
    if (this.form.form.valid) {
      users.forEach(user => {
        if (this.user.email == user.userName && this.user.password == user.userPassword){
          this.navCtrl.setRoot("HomePage");
        }
      });
    }
  }

  signUp() {
    //Shows signup screen(modal)
    let modal = this.modalCtrl.create("SignupPage");
    modal.present();
  }

  resetPassword() {
    let prompt = this.alertCtrl.create({
      title: 'Reset Password',
      message: "Enter your e-mail account",
      inputs: [
        {
          name: 'mail',
          placeholder: 'E-mail'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Ok',
          handler: data => {
            this.toast.show('Request sent to ' + data.mail + '.')
          }
        }
      ]
    });
    prompt.present();
  }

}

