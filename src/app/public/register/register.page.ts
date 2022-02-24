import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConfirmedValidator } from './confirmed.validator';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {
  credentialsForm: FormGroup;
  constructor(private modalController: ModalController,
    private authService: AuthenticationService,
    private navCtrl: NavController,
    private formBuilder: FormBuilder,
    private router: Router,
    private alertService: AlertService
    

  ) { }
  
  ngOnInit() {
    this.credentialsForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      phone: ['', [Validators.required,Validators.pattern('^[0-9]{10}$')]],
      mrn: ['', []],
      confirm_password: ['', [Validators.required]],
      cnp: ['', [Validators.required, ,Validators.maxLength(13),Validators.pattern('(1[1-9][0-9]|2[1-9][0-9]|50[0-9]|60[9]|7[1-9][0-9]|8[1-9][0-9]){1}(0[1-9]|1[0-2]){1}(0[1-9]|1[0-9]|2[0-9]|3[0-1]){1}[0-9]{6}$')]],
    },
    {
      validator: ConfirmedValidator('password', 'confirm_password')
      
    });
  }
  // Dismiss Register Modal
  dismissRegister() {
    this.modalController.dismiss();
  }
  // On Login button tap, dismiss Register modal and open login Modal
  async loginModal() {
    return this.router.navigateByUrl('/login');
    // this.dismissRegister();
  }
  get f(){
    return this.credentialsForm.controls;
  }
  onSubmit() {
    // console.log('bine');
    this.authService.register(this.credentialsForm.value).subscribe(
      data => {  
         if(data['message']!='Contul a fost creat cu succes!')
        this.alertService.presentToast(data['message']);
        else{
        this.alertService.presentToast(data['message']);
        return this.router.navigateByUrl('/login');
        }
          }
    );
  }
  
 
}
