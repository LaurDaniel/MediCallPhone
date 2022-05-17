import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IonLoaderService } from 'src/app/services/ion-loader.service';
import { HttpClient, HttpHeaders,HttpParams} from '@angular/common/http';
import { AlertService } from 'src/app/services/alert.service';
import { MenuController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
public conturi:any;
//  url = "https://probe.infragroup.ro";
 url = "https://medicall.medicover.ro";
  credentialsForm: FormGroup;
  constructor(   private formBuilder: FormBuilder,private ionLoaderService: IonLoaderService,private http: HttpClient,private alertCtrl: AlertController,private router: Router) { }

  ngOnInit() {
    this.credentialsForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      mrn: ['', []],
      cnp: ['', [Validators.required, ,Validators.maxLength(13),Validators.pattern('(1[1-9][0-9]|2[1-9][0-9]|50[0-9]|60[9]|7[1-9][0-9]|8[1-9][0-9]){1}(0[1-9]|1[0-2]){1}(0[1-9]|1[0-9]|2[0-9]|3[0-1]){1}[0-9]{6}$')]],
    }
   );
  //  this.http.get(`http://127.0.0.1:8000/api/profile/getinfo/49`).subscribe(data=>{
   this.http.get(`${this.url}/api/profile/getinfo/${localStorage.getItem("user_id")}`).subscribe(data=>{
    this.conturi = data['conturi'];
   
    this.ionLoaderService.dismissLoader();

  
    // console.log((this.specialitati[0].specialitate));
 });
  }

  onSubmit(){
    this.credentialsForm.patchValue({
      id_user: localStorage.getItem("user_id")
    });

  this.http.post(`${this.url}/api/profile/create`,this.credentialsForm.value).subscribe(data=>{
  // this.http.post(`http://127.0.0.1:8000/api/profile/create`,this.credentialsForm.value).subscribe(data=>{
    console.log(localStorage.getItem("user_id"));
      let alert = this.alertCtrl.create({
        // title: '',
        message: data['message'],
        buttons: [
          {
            text: 'Ok',
            cssClass:'icon-color',
            handler: data => {
              this.router.navigateByUrl('/profile');
             
              }  
          }
        ]
      });
      alert.then(alert => alert.present());
      
    
    
   });
  }
  delete(id){
    this.http.get(`${this.url}/api/profile/delete/${id}`).subscribe(data=>{
   
          let alert = this.alertCtrl.create({
            // title: '',
            message: data['message'],
            buttons: [
              {
                text: 'Ok',
                cssClass:'icon-color',
                handler: data => {
                  this.router.navigateByUrl('/profile');
                 
                  }  
              }
            ]
          });
          alert.then(alert => alert.present());
          
        
        
       });
  }
}
