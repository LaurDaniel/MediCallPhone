import { Component, OnInit } from '@angular/core';
import { MenuController, AlertController } from '@ionic/angular';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-programari',
  templateUrl: './programari.page.html',
  styleUrls: ['./programari.page.scss'],
})

export class ProgramariPage implements OnInit {

  url = "https://probe.infragroup.ro";
  public medici: any;
  public mediciSelect: any;
  public mediciIsEnabled=true;
  public specialitati: any;
  public  minDate = new Date().toISOString();;
  constructor(private menu: MenuController,private http: HttpClient) { }

  ngOnInit() {
    this.menu.enable(true);
    this.http.get(`http://127.0.0.1:8000/api/programari/getinfo/49`).subscribe(data=>{
    
      this.specialitati = [...new Map(data['specialitati'].map(item => [item['specialitate'], item])).values()];
      this.medici = data['doctors'];
      console.log( this.specialitati);
   });
  }

  selectSpecialitate(specialitate){
    this.mediciIsEnabled = false;
    this.mediciSelect =  this.medici.filter(function(medic) {
      return medic.departament == specialitate;
      
    });console.log(this.medici);
  }

}
