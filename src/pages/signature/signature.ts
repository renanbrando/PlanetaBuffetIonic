import { Component, ViewChild } from '@angular/core';
import { NavController, IonicPage, ViewController } from 'ionic-angular';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { ToastService } from '../../shared/services/toast.service';

@IonicPage()
@Component({
  selector: 'page-signature',
  templateUrl: 'signature.html',
})
export class SignaturePage {
  @ViewChild(SignaturePad) public signaturePad: SignaturePad;

  public signaturePadOptions: Object = {
    'minWidth': 2,
    'canvasWidth': 340,
    'canvasHeight': 200

  };
  public signatureImage: string;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public toast: ToastService) {
  }

  canvasResize() {
    let canvas = document.querySelector('canvas');
    this.signaturePad.set('minWidth', 1);

    console.log(canvas.offsetWidth);

    this.signaturePad.set('canvasWidth', canvas.offsetWidth);

    this.signaturePad.set('canvasHeight', canvas.offsetHeight);
  }


  ngAfterViewInit() {
    console.log("Reset Model Screen");
    this.signaturePad.clear();
    this.canvasResize();
  }

  drawCancel() {
    this.viewCtrl.dismiss();
  }

  drawComplete() {
    this.signatureImage = this.signaturePad.toDataURL();
    console.log(this.signatureImage);
    this.viewCtrl.dismiss();
    this.navCtrl.push("HomePage");
  }

  drawClear() {
    this.signaturePad.clear();
  }

  

}