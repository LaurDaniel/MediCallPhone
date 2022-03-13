import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConferintaPageRoutingModule } from './conferinta-routing.module';

import { ConferintaPage } from './conferinta.page';
import { SafePipe } from 'src/app/safe.pipe';
import { NgxDropzoneModule } from 'ngx-dropzone';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConferintaPageRoutingModule,
    NgxDropzoneModule
    
  ],
  declarations: [ConferintaPage,SafePipe]
})
export class ConferintaPageModule {}
