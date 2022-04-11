import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgramariPageRoutingModule } from './programari-routing.module';

import { ProgramariPage } from './programari.page';
import { IonicSelectableModule } from 'ionic-selectable';
import { DatePicker } from '@ionic-native/date-picker/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgramariPageRoutingModule,
    IonicSelectableModule,
    // DatePicker
    
  ],
  declarations: [ProgramariPage],
  providers: [ DatePicker]
})
export class ProgramariPageModule {}
