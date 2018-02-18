import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuffetsmapsPage } from './buffetsmaps';
import { GoogleMaps } from '@ionic-native/google-maps';

@NgModule({
  declarations: [
    BuffetsmapsPage,
  ],
  imports: [
    IonicPageModule.forChild(BuffetsmapsPage),
  ],
})
export class BuffetsmapsPageModule {}
