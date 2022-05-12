import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArhivaPageRoutingModule } from './arhiva-routing.module';

import { ArhivaPage } from './arhiva.page';
import {SharedModule} from 'src/app/components/shared/shared.module';
import { PreviewAnyFile } from '@ionic-native/preview-any-file/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArhivaPageRoutingModule,
    SharedModule
  ],
  declarations: [ArhivaPage],
  providers: [ PreviewAnyFile]
})
export class ArhivaPageModule {}
