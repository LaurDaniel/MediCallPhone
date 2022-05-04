import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ProgramariPageRoutingModule } from './programari-routing.module';
import { ProgramariPage } from './programari.page';
import { IonicSelectableModule } from 'ionic-selectable';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Ng2FlatpickrModule } from 'ng2-flatpickr';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';





@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgramariPageRoutingModule,
    IonicSelectableModule,
    ReactiveFormsModule,
    NgbModule
   
  ],
  declarations: [ProgramariPage],
  providers: [
  
    InAppBrowser,
  
  ]

})
export class ProgramariPageModule {}
