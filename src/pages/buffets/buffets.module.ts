import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuffetsPage } from './buffets';

@NgModule({
  declarations: [
    BuffetsPage,
  ],
  imports: [
    IonicPageModule.forChild(BuffetsPage),
  ],
})
export class BuffetsPageModule {}
