import { Component, OnInit } from '@angular/core';
import { MenuController, AlertController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { ViewEncapsulation } from '@angular/core';
// import { SafePipe } from 'src/app/safe.pipe';

@Component({
  selector: 'app-conferinta',
  templateUrl: './conferinta.page.html',
  styleUrls: ['./conferinta.page.scss'],
})
export class ConferintaPage implements OnInit {
  url = "https://probe.infragroup.ro";
  public url_conferinta: any;
  constructor( private menu: MenuController, private authService: AuthenticationService,private http: HttpClient) {
    // this.menu.enable(true);
   }

  ngOnInit() {
    this.menu.enable(true);
    this.http.get(`${this.url}/api/conferinta/roomOpened/${localStorage.getItem("user_id")}`).subscribe(data=>{
      // this.showAlert(data['response']);
      this.url_conferinta = data['url_consult'];
      console.log(data);
      // console.log();
          })

  }

}
