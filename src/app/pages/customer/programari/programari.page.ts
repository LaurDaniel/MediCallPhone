import { Component, OnInit, ViewChild,QueryList, ElementRef  } from '@angular/core';
import { MenuController, AlertController } from '@ionic/angular';
import { HttpClient, HttpHeaders,HttpParams} from '@angular/common/http';
import { IonicSelectableComponent } from 'ionic-selectable';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {FlatpickrOptions, Ng2FlatpickrComponent} from 'ng2-flatpickr';
import Romanian from 'flatpickr/dist/l10n/ro.js';
import flatpickr from "flatpickr";
import { AlertService } from 'src/app/services/alert.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

// import { DatePicker } from '@ionic-native/date-picker/ngx';

@Component({
  selector: 'app-programari',
  templateUrl: './programari.page.html',
  styleUrls: ['./programari.page.scss'],
})

export class ProgramariPage implements OnInit {

  @ViewChild(Ng2FlatpickrComponent) flatpickr: ElementRef;
  pickers: QueryList<Ng2FlatpickrComponent>;
  url = "https://probe.infragroup.ro";
  public medici: any;
  public mediciSelect: any;
  public specialitati: any;
  public specialitatiSelect: any;
  public specialitateSelectata: any;
  public medicSelectat: any;
  public oraSelectata: any;
  public data: any;
  public oraEnabled :any;
  public slots :any;
  public minorSelectat :any;
  public minori :any;
  public user :any;
  public user_name :any;
  public  minDate = new Date().toISOString().split("T")[0];                                                    
  programareForm: FormGroup;
  dateOptions: FlatpickrOptions = {
    locale: Romanian.ro,
    dateFormat: 'Y-m-d',
    altFormat: 'Y-m-d',
    altInput: true,
    altInputClass: "datePicker", 
   minDate: new Date().toISOString().split("T")[0],
    onChange: ( selectedDates: any ) => {
    this.oraEnabled = 1;
    // this.pickers.first.writeValue( selectedDates[0] ); 
  }
    };
  
  constructor( private menu: MenuController,private http: HttpClient,private formBuilder: FormBuilder,    private alertService: AlertService,private sanitizer: DomSanitizer,private iab: InAppBrowser) { }
  ngOnInit() {
    this.menu.enable(true);
    this.programareForm = this.formBuilder.group({
      specialitate: ['', [Validators.required]],
      medic: ['', [Validators.required]],
      motiv: ['', []],
      data: ['', [Validators.required]],
      minor: ['', []],
      ora: ['', [Validators.required]],
      user: ['', []],
    });
    this.http.get(`${this.url}/api/programari/getinfo/49`).subscribe(data=>{
      // var departments = data['specialitati'];
      this.user = data['user'];
      this.user_name = this.user.name;
      this.specialitati = [...new Map(data['specialitati'].map(item => [item['specialitate'], item])).values()];
      this.specialitati  =  Object.values(this.specialitati);
      this.specialitatiSelect = this.specialitati.filter(function(specialitate) {
        if(specialitate.age_from <= data['user'].varsta && specialitate.age_to >= data['user'].varsta)
          if(data['user'].plata == 'abonat' || specialitate.tip_pacient=='FFS')
            return true;
          return false;
      });
      this.medici = Object.values(data['doctors']);
      this.minori = Object.values(data['minori']);
      // console.log((this.specialitati[0].specialitate));
   });
  //  console.log(this.minDate)
  }

 ////functii on change pe select uri

  selectSpecialitate(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    if(this.minorSelectat == null)
      var a = this.user;
    else
     var a = this.minorSelectat;
    //  console.log(this.minorSelectat.plata);
    this.mediciSelect =  this.medici.filter(function(medic) {
          console.log(medic,event.value);
          if(medic.departament == event.value.specialitate)
          if(medic.age_from <= a.varsta && medic.age_to >= a.varsta)
          if(a.plata == 'abonat' || medic.plata2=='FFS')
          return true;
        return false;
          return medic.departament == event.value.specialitate;
        });
        this.medicSelectat = null;
        this.data = null;
        this.oraSelectata = null;
        }
  
  selectMedic(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    // this.medicSelectat =  event.value.id;
    this.oraSelectata = null;
    var calendar = flatpickr(document.getElementById("calendar"));
    calendar.set({
      "minDate": new Date(),
      locale: Romanian.ro,
      dateFormat: 'Y-m-d',
      altInput: true,
      altInputClass: "datePicker", 
      altFormat: 'Y-m-d', 
       "disable": [
        function(date) {
            return ( event.value.days.includes(date.getDay()));
        }
    ],
   
    });
    calendar.set("onChange", ( selectedDates: any ) => {
    let params = new HttpParams();
    params = params.append('date', flatpickr.formatDate(selectedDates[0],'Y-m-d'));
    params = params.append('doctor', this.medicSelectat.id);
    params = params.append('user', "49");
    params = params.append('minor', "0");
    this.http.get(`${this.url}/api/programari/getslots`,{params:params}).subscribe(data=>{
      // console.log(data['message']);
      if(data['message']==undefined)
      this.slots = Object.values(data['slots']);
      else
      alert(data['message']);
      this.oraSelectata = null;
// console.log(this.slots[0].slot);
    });
    // this.pickers.first.writeValue( selectedDates[0] ); 
  })  
  
        }
        minorClick(){
          this.alertService.presentToast('Daca doriti sa programati o consultatie pentru unul dintre conturile asociate, selectati de mai jos, altfel iesiti din aceasta pagina.');
          // console.log('click');
        }

        selectMinor(event: {
          component: IonicSelectableComponent,
          value: any
        }) {
      if(event.value != null)
          this.specialitatiSelect = this.specialitati.filter(function(specialitate) {
                if(specialitate.age_from <= event.value.varsta && specialitate.age_to >= event.value.varsta)
                if(event.value.plata == 'abonat' || specialitate.tip_pacient=='FFS')
                return true;
              return false;
              });
              this.specialitateSelectata = null;
              this.medicSelectat = null;
              this.data = null;
              this.oraSelectata = null;
              }

          clearMinor(event:{
            component: IonicSelectableComponent,
            value: any
          }){
          var a = this.user;
            this.specialitatiSelect = this.specialitati.filter(function(specialitate) {
             
              if(specialitate.age_from <= a.varsta && specialitate.age_to >= a.varsta)
                if(a.plata == 'abonat' || specialitate.tip_pacient=='FFS')
                  return true;
                return false;
            });
            this.specialitateSelectata = null;
            this.medicSelectat = null;
            this.data = null;
            this.oraSelectata = null;
            // this.programareForm.value.medic = null;
            // console.log( this.programareForm.value.medic);
          }

              onSubmit(){
                  this.programareForm.patchValue({
                    user: this.user, 
                  });
              
                console.log(this.programareForm.value);
                this.http.post(`${this.url}/api/programari/create`, this.programareForm.value).subscribe(data=>{
                  console.log(data);
                  const browser = this.iab.create(data['url']);

               
            // console.log(this.slots[0].slot);
                });
              }

}
