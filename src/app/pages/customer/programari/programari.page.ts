import { Component, OnInit } from '@angular/core';
import { MenuController, AlertController } from '@ionic/angular';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { IonicSelectableComponent } from 'ionic-selectable';
// import { DatePicker } from '@ionic-native/date-picker/ngx';

@Component({
  selector: 'app-programari',
  templateUrl: './programari.page.html',
  styleUrls: ['./programari.page.scss'],
})

export class ProgramariPage implements OnInit {

  url = "https://probe.infragroup.ro";
  public medici: any;
  public mediciSelect: any;
  public specialitati: any;
  public  minDate = new Date().toISOString();;
  
  constructor( private menu: MenuController,private http: HttpClient) { }

  ngOnInit() {
    this.menu.enable(true);
    this.http.get(`http://127.0.0.1:8000/api/programari/getinfo/49`).subscribe(data=>{
      // var departments = data['specialitati'];
      this.specialitati = [...new Map(data['specialitati'].map(item => [item['specialitate'], item])).values()];
      this. specialitati  =  Object.values(this.specialitati);
      this.medici = Object.values(data['doctors']);
      console.log((this.specialitati[0].specialitate));
   });
  }

 

  selectSpecialitate(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    this.mediciSelect =  this.medici.filter(function(medic) {
          console.log(event.value);
          return medic.departament == event.value.specialitate;
        });
        }


}
