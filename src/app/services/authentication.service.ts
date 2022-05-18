import { Platform, AlertController, NavController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Storage } from '@ionic/storage';
import { environment } from '../../environments/environment';
import { tap, catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { EnvService } from './env.service';
import { EventService } from './event.service';
import { Router } from '@angular/router';
 
const TOKEN_KEY = 'access_token';
 
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isLoggedIn = false;
  token:any;
  url = "https://medicall.medicover.ro";
  // url = "https://probe.infragroup.ro";
  // url = "http://127.0.0.1:8000";
  user = null;
  // user_id = null;
  authenticationState = new BehaviorSubject(false);
 
  constructor(private env: EnvService,private http: HttpClient, private helper: JwtHelperService, private storage: Storage,public events: EventService, private router: Router,
    private plt: Platform, private alertController: AlertController,  private navCtrl: NavController,) {
    this.plt.ready().then(() => {
      this.checkToken();
    });
  }
 
  checkToken() {
    this.storage.get(TOKEN_KEY).then(token => {
      if (token) {
        let decoded = this.helper.decodeToken(token);
        let isExpired = this.helper.isTokenExpired(token);
 
        if (!isExpired) {
          this.user = decoded;
          this.authenticationState.next(true);
        } else {
          this.storage.remove(TOKEN_KEY);
        }
      }
    });
  }
 
  register(credentials) {
   
    return this.http.post(`${this.url}/api/register`, credentials);
     
  }
 
  login(credentials) {
    return this.http.post(`${this.url}/api/login`, credentials)
      .pipe(
        tap(res => {
          if(res['message'] == 'Verificare')
          this.showAlert('Pentru a intra in contul deja existent, este necesar sa accesati link-ul pe care l-ati primit pe adresa de e-mail si sa va conectati.Multumim!');
          else{
          this.storage.set(TOKEN_KEY, res['access_token']);
          this.user = this.helper.decodeToken(res['access_token']);
          this.authenticationState.next(true);
          localStorage.setItem("user_id",res['user'].id);
          // alert(res['user'])
          this.events.changeUser({
            user: JSON.stringify(res['user'])
          })
        }
        }),
        catchError(e => {
         
          this.showAlert('Autentificarea nu a reusit! Fi sigur ca email-ul si parola sunt corecte!');
          throw new Error(e);
        })
      );
  }
 
  logout() {
    this.storage.remove(TOKEN_KEY).then(() => {
      this.authenticationState.next(false);
    });
    // const headers = new HttpHeaders({
    //   'Authorization': this.token["token_type"]+" "+this.token["access_token"]
    // });
    // return this.http.get(this.env.API_URL + 'auth/logout', { headers: headers })
    // .pipe(
    //   tap(data => {
    //     this.storage.remove("token");
    //     this.isLoggedIn = false;
    //     delete this.token;
    //     return data;
    //   })
    // )
  }
 
  getSpecialData() {
    return this.http.get(`${this.url}/api/special`).pipe(
      catchError(e => {
        let status = e.status;
        if (status === 401) {
          this.showAlert('You are not authorized for this!');
          this.logout();
        }
        throw new Error(e);
      })
    )
  }
 
  isAuthenticated() {
    return this.authenticationState.value;
  }
 
  showAlert(msg) {
    let alert = this.alertController.create({
      message: msg,
       header: '',
      buttons: ['OK']
    });
    alert.then(alert => alert.present());
  }
}