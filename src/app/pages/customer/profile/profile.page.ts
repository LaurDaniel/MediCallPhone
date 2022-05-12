import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  public user_name : any;
  public user : any;
  public avatar : any;
  url = "https://probe.infragroup.ro";
  credentialsForm: FormGroup;
  constructor(   private formBuilder: FormBuilder,) { }

  ngOnInit() {
    this.credentialsForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      mrn: ['', []],
      cnp: ['', [Validators.required, ,Validators.maxLength(13),Validators.pattern('(1[1-9][0-9]|2[1-9][0-9]|50[0-9]|60[9]|7[1-9][0-9]|8[1-9][0-9]){1}(0[1-9]|1[0-2]){1}(0[1-9]|1[0-9]|2[0-9]|3[0-1]){1}[0-9]{6}$')]],
    }
   );
    this.avatar=localStorage.getItem('avatar');
    this.user_name = localStorage.getItem('user_name');
  }

  // onSubmit(){
  //   this.credentialsForm.patchValue({
  //     user: this.user, 
  //   });
   
 
  // this.http.post(`${this.url}/api/programari/create`, v.value).subscribe(data=>{
   
  //     let alert = this.alertCtrl.create({
  //       // title: '',
  //       message: data['response'],
  //       buttons: [
  //         {
  //           text: 'Ok',
  //           cssClass:'icon-color',
  //           handler: data => {
  //               if(data['prg'] == true)
  //               {
  //                 this.router.navigateByUrl('/home');
  //               }
  //             }  
  //         }
  //       ]
  //     });
  //     alert.then(alert => alert.present());
      
    
    
  //  });
  // }

}
