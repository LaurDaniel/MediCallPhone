import { Component, OnInit } from '@angular/core';
import { MenuController, AlertController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import {interval} from 'rxjs';
import * as fileSaver from 'file-saver';

// import { File } from '@ionic-native/file/ngx';


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
  public fisiere: any;
  title = 'dropzone';
  public id_consult: any;
  files: File[] = [];
  private downloadedFile;
  constructor( private menu: MenuController, private router: Router, private authService: AuthenticationService,private http: HttpClient) {
   }
 
 fetchUrl()
 {
  this.http.get(`${this.url}/api/conferinta/roomOpened/${localStorage.getItem("user_id")}`).subscribe(data=>{
   
    this.url_conferinta = data['url_consult'];
    this.id_consult = data['id_consult'];
    this.fisiere = data['fisiere'];
    console.log(this.fisiere);
 });
 }

  ngOnInit() {
  
    this.url_conferinta = null;
    this.menu.enable(true);
      this.fetchUrl();
    // console.log(this.url_conferinta)
    if(!this.url_conferinta)
      interval(30000).subscribe(x => {
        this.fetchUrl();
    });
  
 
    // console.log(navigator.mediaDevices.getUserMedia());

  }

  onSelect(event) {
    console.log(event.addedFiles);
    this.files.push(...event.addedFiles);
  
        const formData = new FormData();
    
        for (var i = 0; i < this.files.length; i++) { 
          formData.append("file",this.files[i]);
        }
    const headers = new HttpHeaders({
      'Accept': '*/*',
      'enctype':"multipart/form-data"
     
   
    });
    let options = { headers: headers };

    this.http.post(`${this.url}/api/conferinta/fileupload/${this.id_consult}`, formData, options)
    .subscribe(res => {
       console.log(res);
       alert('Fisier incarcat cu succes.');
    })
}

onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
}

downloadFile(nume_fisier) {
this.http.get(`${this.url}/api/conferinta/filedownload/${nume_fisier}`,{responseType: 'blob'})
    .subscribe((response: any) => {
      let blob:any = new Blob([response], { type: 'text/json; charset=utf-8' });
			const url = window.URL.createObjectURL(blob);
      fileSaver.saveAs(blob, nume_fisier);
      // let dataType = response.type;
      // let binaryData = [];
      // binaryData.push(response);
      // let downloadLink = document.createElement('a');
      // downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, {type: dataType}));
      // downloadLink.setAttribute('download', nume_fisier);
      // document.body.appendChild(downloadLink);
      // downloadLink.click();
      //  alert('Fisier incarcat cu succes.');
    })
}

}
