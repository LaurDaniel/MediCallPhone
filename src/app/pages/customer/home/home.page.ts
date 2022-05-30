import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MenuController, AlertController } from '@ionic/angular';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { ViewEncapsulation } from '@angular/core';
import { IonLoaderService } from 'src/app/services/ion-loader.service';
import { AndroidPermissions } from '@awesome-cordova-plugins/android-permissions/ngx';
import { Platform } from '@ionic/angular';
export interface Data {
  programari: string;
  tranzactii: string;
  message: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePage implements OnInit {
  url = "https://medicall.medicover.ro";
  // url = "https://probe.infragroup.ro";
  constructor(  private platform: Platform, private androidPermissions: AndroidPermissions,private http: HttpClient,private menu: MenuController, private authService: AuthenticationService, private alertCtrl: AlertController,private ionLoaderService: IonLoaderService) { 
    this.menu.enable(true);
  }

public programari: any;
public tranzactii: any;
public data: Data;
public columns: any;
public rows: any;
pageOfItems: Array<any>;
pageOfItems2: Array<any>;


  ngOnInit() {
    // this.ionLoaderService.simpleLoader();
    this.menu.enable(true);
    if(this.platform.is('android')){
      this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.RECORD_AUDIO).then(
        result => console.log('Has permission?',result.hasPermission),
        err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.RECORD_AUDIO)
      );
      
      this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.RECORD_AUDIO, this.androidPermissions.PERMISSION.GET_ACCOUNTS]);
      } 
    //  this.ionLoaderService.dismissLoader();
    this.http.get<Data>(`${this.url}/api/home/programari/${localStorage.getItem("user_id")}`).subscribe(data=>{
      this.programari = data.programari;
      this.tranzactii = data.tranzactii;
      if(data.message == '1')
        this.showAlert('Plata dumneavoastra este in curs procesare. Puteti urmari statusul acesteia pe pagina principala. Va multumim!');
      // console.log(this.programari);
    })
 
    
   
  }

  showAlert(msg) {
    let alert = this.alertCtrl.create({
      message: msg,
      buttons: [{
        text: 'OK',
        cssClass:'icon-color',
        handler:()=>{
          window.location.assign('/');
        }
      }]
    });
    alert.then(alert => alert.present());
  }

  deleteConsult(consult) {
    let alert = this.alertCtrl.create({
      // title: '',
      message: 'Sunteti sigur ca doriti sa anulati consultatia selectata? </br> Aceasta actiune poate fi efectuata cu maxim 24 ore inainte de consultatie.',
      buttons: [
        {
          text: 'Inapoi',
          role: 'cancel',
          cssClass:'icon-color',
          handler: () => {
            // console.log('Cancel clicked');
          }
        },
        {
          text: 'Anuleaza!',
          cssClass:'icon-color',
          handler: data => {
            // console.log('Items Removed!');
            let data_prog = new Date(consult.data_programare+" "+consult.ora_programare);
            let data_form = new Date(new Date(data_prog).setHours(data_prog.getHours() - 24))
            if(data_form.getTime() < new Date().getTime()){
              this.showAlert('Ne pare rau, insa nu puteti anula o programare cu mai mult de 24 ore pana la inceperea acesteia.');
            }
            else
            {
              this.http.get(`${this.url}/api/home/delete/${consult.id}`).subscribe(data=>{
                this.showAlert(data['response']); 
              })
            }
              
              // console.log(data);
              // console.log();
                 

         
          }
        }
      ]
    });
    alert.then(alert => alert.present());
  }
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }
  onChangePage2(pageOfItems2: Array<any>) {
    // update current page of items
    this.pageOfItems2 = pageOfItems2;
  }

}
