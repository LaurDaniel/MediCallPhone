import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConferintaPageRoutingModule } from './conferinta-routing.module';

import { ConferintaPage } from './conferinta.page';
import { SafePipe } from 'src/app/safe.pipe';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { HTTP } from '@ionic-native/http/ngx';
import { File as File2 } from '@ionic-native/file/ngx';
// import { FileOpener } from '@awesome-cordova-plugins/file-opener/ngx';
import { PreviewAnyFile } from '@ionic-native/preview-any-file/ngx';
import { Media } from '@ionic-native/media/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConferintaPageRoutingModule,
    NgxDropzoneModule
    
  ],
  declarations: [ConferintaPage,SafePipe],
  providers: [ HTTP, File2, PreviewAnyFile,Media]
})
export class ConferintaPageModule {}
