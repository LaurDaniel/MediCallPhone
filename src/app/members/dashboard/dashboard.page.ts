import { AuthenticationService } from './../../services/authentication.service';
import { Component, NgZone, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpClientModule, HttpParams, HttpRequest} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import {NgForm} from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  userinfobool=0;
  indexStatus:{};
  contor=0;
  indexForm: FormGroup;
  public isWsAvailable: BehaviorSubject<boolean> = new BehaviorSubject(false);
  barcodeScannerOptions: BarcodeScannerOptions;
  constructor(private authService: AuthenticationService,
    private barcodeScanner: BarcodeScanner,
     private storage: Storage,
      private httpclient: HttpClient,
      private formBuilder: FormBuilder,
      private zone: NgZone
      ) {
    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };
   }
 
  ngOnInit() {
    this.indexForm = this.formBuilder.group({
    });
  }
   backtoscreen()
   {
    this.scannedData= null;
    this.userinfo=0;
    this.userinfobool = 0;
    this.indexStatus=0;
    this.contor=0;
   }
  getclientInfo(cod_client)
  {
      var url = 'https://readers.infraweb.ro/api/operator/clientinfo/'+cod_client;
     this.storage.get('access_token').then((token) => {  
       let headers = new HttpHeaders() ;
      headers =  headers.set('Accept','application/json').set('Content-Type','application/json').set('Authorization','Bearer '+token);
    this.httpclient.get(url, {headers: headers}).subscribe((response) => {
    if(response['eroare']) {
      this.userinfo = response;
    } else
    {
      this.userinfo = response;
    }
      });
   }); 
   this.userinfobool = 1;
  } 

   sendIndex(form: NgForm)
   {
    var url = 'https://readers.infraweb.ro/api/operator/index/add';
    this.storage.get('access_token').then((token) => {  
      let headers = new HttpHeaders() ;
      headers =  headers.set('Authorization','Bearer '+token);
      let parameters = new HttpParams();
      parameters = parameters.set('cod_contor',form.value['cod_contor']).set('index_citire',form.value['index_citire']).set('observatii',form.value['observatii']);
   this.httpclient.post(url,parameters,{headers: headers}, ).subscribe((response) => {
     this.indexStatus = response;
     console.log(this.indexStatus);
     });

  }); 
   }
  getToken() {
   
     this.getclientInfo(this.scannedData["text"]);
     
  }; 
  ascundeuserinfo()
  {
    this.userinfobool = 0;
  }
  processcanare()
  {
    this.scanCode();
    if(this.scannedData["text"])
    {
      this.zone.run(() => this.contor = 1);
    } else
    {
      this.zone.run(() => this.contor = 1);
    }
  }
  scanCode() {
    this.barcodeScanner
      .scan()
      .then(barcodeData => {
        this.zone.runTask(() => this.contor = 1);
        this.zone.runTask(() => this.scannedData = barcodeData);

        document.getElementById("cod_contor").setAttribute('value', this.scannedData['text']);
      })
      .catch(err => {
        this.zone.runTask(() => this.contor = 0);
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

