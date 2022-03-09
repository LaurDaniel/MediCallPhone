import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConferintaPageRoutingModule } from './conferinta-routing.module';

import { ConferintaPage } from './conferinta.page';
import { SafePipe } from 'src/app/safe.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConferintaPageRoutingModule,
    
  ],
  declarations: [ConferintaPage,SafePipe]
})
export class ConferintaPageModule {}
