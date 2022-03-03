import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MenuController, AlertController } from '@ionic/angular';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { ViewEncapsulation } from '@angular/core';
export interface Data {
  programari: string;
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
  // user = authService
//  programari: any[];
//  headElements = ['ID', 'Nume pacient', 'Doctor', 'Data', 'Ora', 'Actiuni'];
public data: Data;
public columns: any;
public rows: any;
  ngOnInit() {
    this.menu.enable(true);
    // this.columns = [
    //   { name: 'id', },
    //   { name: 'Data programare', prop: 'data_programare' },
    //   { name: 'Ora programare', prop: 'ora_programare' },
    //   { name: 'Nume pacient', prop: 'user' },
    //   { name: 'Doctor', prop: 'doctor' },
    //   { name: 'Actiuni', prop: 'id' },
    // ];
    this.http.get<Data>(`${this.url}/api/home/programari/${localStorage.getItem("user_id")}`).subscribe(data=>{
      this.rows = data.programari;
// console.log(data['programari']);
// console.log();
    })
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
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Anuleaza!',
          cssClass:'icon-color',
          handler: data => {
            console.log('Items Removed!');
            this.http.get(`${this.url}/api/home/delete/${id_consult}`).subscribe(data=>{
              
              console.log(data);
              // console.log();
                  })

            //Call you API to remove Items here.
          }
        }
      ]
    });
    alert.then(alert => alert.present());
  }

}
