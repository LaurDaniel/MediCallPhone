import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController, MenuController, NavController } from '@ionic/angular';
import { RegisterPage } from '../register/register.page';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
 
  credentialsForm: FormGroup;
  RegisterPage: RegisterPage;
 
  constructor( private menu: MenuController,private router: Router,public navCtrl: NavController, private formBuilder: FormBuilder, private authService: AuthenticationService, private modalController: ModalController,) {this.menu.enable(false); }
 
  ngOnInit() {
    this.credentialsForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
 
  onSubmit() {
    // this.showAlert('Autentificarea nu a reusit! Fi sigur ca email-ul si parola sunt corecte!');
    this.authService.login(this.credentialsForm.value).subscribe();
  }
  dismissLogin() {
    this.modalController.dismiss();
  }

  async registerModal() {
    this.dismissLogin();
    return this.router.navigateByUrl('/register');
    
  }
 
 
 
}