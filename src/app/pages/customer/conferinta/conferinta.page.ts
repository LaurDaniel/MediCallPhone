import { Component, OnInit } from '@angular/core';
import { MenuController, AlertController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {interval} from 'rxjs';

import { Router } from '@angular/router';


@Component({
  selector: 'app-conferinta',
  templateUrl: './conferinta.page.html',
  styleUrls: ['./conferinta.page.scss'],
})
export class ConferintaPage implements OnInit {
  url = "https://probe.infragroup.ro";
  public url_conferinta: any;
  public check_url: any;
  title = 'dropzone';
  
  
  files: File[] = [];
  constructor( private menu: MenuController, private router: Router, private authService: AuthenticationService,private http: HttpClient) {
    // this.menu.enable(true);
   }
 
 fetchUrl()
 {
  this.http.get(`${this.url}/api/conferinta/roomOpened/${localStorage.getItem("user_id")}`).subscribe(data=>{
    this.url_conferinta = data['url_consult'];
 });
 }

  ngOnInit() {
    // let tempRouter = this.router;
    this.menu.enable(true);
    
      this.fetchUrl();
    // console.log(this.url_conferinta)
    if(!this.url_conferinta)
      interval(30000).subscribe(x => {
        this.fetchUrl();
    });

  }

  

 
 
  


  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);

    const formData = new FormData();

    for (var i = 0; i < this.files.length; i++) { 
      formData.append("file[]", this.files[i]);
    }
    const headers = new HttpHeaders({
      'Accept': "application/json ",
      'Content-Type': 'application/json'
    });
    let options = { headers: headers };

    this.http.post(`http://127.0.0.1:8000/api/conferinta/fileupload/${localStorage.getItem("user_id")}`, formData, options)
    .subscribe(res => {
       console.log(res);
       alert('Uploaded Successfully.');
    })
}

onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
}

}
