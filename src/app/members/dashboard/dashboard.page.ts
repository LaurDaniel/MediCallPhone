import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpClientModule, HttpRequest} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import {
  BarcodeScannerOptions,
  BarcodeScanner
} from "@ionic-native/barcode-scanner/ngx";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  encodeData: any;
  scannedData: {};
  userinfo:{};
  barcodeScannerOptions: BarcodeScannerOptions;
  constructor(private authService: AuthenticationService,private barcodeScanner: BarcodeScanner, private storage: Storage, private httpclient: HttpClient) {
    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };
   }
 
  ngOnInit() {
  
  }
 
  getclientInfo(cod_client)
  {  var url = 'https://readers.infraweb.ro/api/operator/clientinfo/'+cod_client;
     this.storage.get('access_token').then((token) => {  
       let headers = new HttpHeaders() ;
      headers =  headers.set('Accept','application/json').set('Content-Type','application/json').set('Authorization','Bearer '+token);
    this.httpclient.get(url, {headers: headers}).subscribe((response) => {
    if(response['eroare']) {
      this.userinfo = response;
      console.log(this.userinfo);
    } else
    {
      this.userinfo = response;
    }
      });
   }); 
  } 
  scanCodClientInfo()
  {
   this.getclientInfo(this.scanCode());
  }
  getToken() {
    this.storage.get('access_token').then((token) => {   
     alert("Token utilizator:" + token)
    }); 
  }; 
  scanCode() {
    this.barcodeScanner
      .scan()
      .then(barcodeData => {
        this.scannedData = barcodeData;
        document.getElementById("cod_contor").setAttribute('value', this.scannedData['text']);
        var cod_client = this.scannedData["text"];
        alert(cod_client);
        return(cod_client);
      })
      .catch(err => {
        console.log("Error", err);
      });
     
    
  }
  encodedText() {
    this.barcodeScanner
      .encode(this.barcodeScanner.Encode.TEXT_TYPE, this.encodeData)
      .then(
        encodedData => {
          console.log(encodedData);
          this.encodeData = encodedData;
        },
        err => {
          console.log("Error occured : " + err);
        }
      );
  }
  logout() {
    this.authService.logout();
  }
  
}

