import { MbscModule } from '@mobiscroll/angular';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { HttpClientModule } from '@angular/common/http';
import { Storage, IonicStorageModule } from '@ionic/storage';
import { SafePipe } from './safe.pipe';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { AndroidPermissions } from '@awesome-cordova-plugins/android-permissions/ngx';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { InterceptorModule } from 'src/app/services/interceptor.service';
import { UserAgent } from '@ionic-native/user-agent/ngx';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

export function jwtOptionsFactory(storage) {
  return {
    tokenGetter: () => {
      return storage.get('access_token');
    },
    whitelistedDomains: ['localhost:5000']
  }
}
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [ 
    DatePickerModule,
    MbscModule,  
  
    // InterceptorModule,
BrowserModule, IonicModule.forRoot(),
     AppRoutingModule,IonicStorageModule.forRoot(),
     HttpClientModule, FormsModule,
     JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: [Storage],
      }
    }),
    IonicModule.forRoot({ mode: 'md' }),
    ],
  providers: [
    StatusBar,
    SplashScreen,
    AndroidPermissions,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    BarcodeScanner,
    UserAgent
   
 
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
