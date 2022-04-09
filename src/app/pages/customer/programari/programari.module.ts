import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgramariPageRoutingModule } from './programari-routing.module';

import { ProgramariPage } from './programari.page';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgramariPageRoutingModule,
    IonicSelectableModule
  ],
  declarations: [ProgramariPage]
})
export class ProgramariPageModule {}
