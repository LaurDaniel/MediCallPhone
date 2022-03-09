import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MenuController, AlertController } from '@ionic/angular';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { ViewEncapsulation } from '@angular/core';
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
  url = "https://probe.infragroup.ro";
  constructor(private http: HttpClient,private menu: MenuController, private authService: AuthenticationService, private alertCtrl: AlertController) { 
    this.menu.enable(true);
  }
public programari: any;
public tranzactii: any;
public data: Data;
public columns: any;
public rows: any;
  ngOnInit() {
    this.menu.enable(true);
  
    this.http.get<Data>(`${this.url}/api/home/programari/${localStorage.getItem("user_id")}`).subscribe(data=>{
      this.programari = data.programari;
      this.tranzactii = data.tranzactii;
      if(data.message == '1')
        this.showAlert(data['Plata dumneavoastra este in curs procesare. Puteti urmari statusul acesteia pe pagina principala. Va multumim!']);
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
          window.location.reload();
          // console.log('reload');
        }
      }]
    });
    alert.then(alert => alert.present());
  }

  deleteConsult(id_consult) {
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
            this.http.get(`${this.url}/api/home/delete/${id_consult}`).subscribe(data=>{
              this.showAlert(data['response']);
              
              // console.log(data);
              // console.log();
                  })

         
          }
        }
      ]
    });
    alert.then(alert => alert.present());
  }

}
