import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConferintaPageRoutingModule } from './conferinta-routing.module';

import { ConferintaPage } from './conferinta.page';
import { SafePipe } from 'src/app/safe.pipe';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { File } from '@ionic-native/file/ngx';
import { HTTP } from '@ionic-native/http/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConferintaPageRoutingModule,
    NgxDropzoneModule
    
  ],
  declarations: [ConferintaPage,SafePipe],
  providers: [File, HTTP]
})
export class ConferintaPageModule {}
