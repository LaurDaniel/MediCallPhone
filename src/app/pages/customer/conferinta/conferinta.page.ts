import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MenuController, AlertController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {interval} from 'rxjs';
import { Platform } from '@ionic/angular';
import { File as File2 } from '@ionic-native/file/ngx';
import { Router } from '@angular/router';
import { PreviewAnyFile } from '@ionic-native/preview-any-file/ngx';
import { Media, MediaObject } from '@ionic-native/media/ngx';

// import { File } from '@ionic-native/file';
declare var JitsiMeetExternalAPI: any;


@Component({
  selector: 'app-conferinta',
  templateUrl: './conferinta.page.html',
  styleUrls: ['./conferinta.page.scss'],
 
})
export class ConferintaPage implements OnInit{
  domain: string = "voice.infragroup.ro"; // For self hosted use your domain
    room: any;
    options: any;
    api: any;
    user: any;
//     recording: boolean = false;
// filePath: string;
// fileName: string;
audio: MediaObject;
// audioList: any[] = [];
    
  url = "https://probe.infragroup.ro";
  public url_conferinta: any;
  public check_url: any;
  public fisiere: any;
  title = 'dropzone';
  public id_consult: any;
  files: File[] = [];

  constructor( private media: Media,private previewAnyFile: PreviewAnyFile, private platform: Platform, private file: File2,private menu: MenuController, private router: Router, private authService: AuthenticationService,private http: HttpClient) {
   }
  
 fetchUrl()
 {
  this.http.get(`${this.url}/api/conferinta/roomOpened/${localStorage.getItem("user_id")}`).subscribe(data=>{
   
    this.url_conferinta = data['url_consult'];
    this.id_consult = data['id_consult'];
    this.fisiere = data['fisiere'];
 });
 }

  ngOnInit() {
    this.url_conferinta = null;
    this.menu.enable(true);
      this.fetchUrl();
    if(!this.url_conferinta){
      interval(30000).subscribe(x => {
        this.fetchUrl();
    });
  }
  else{
  this.audio.startRecord();
  this.audio.stopRecord();
  }

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
      //  console.log(res);
       alert('Fisier incarcat cu succes.');
    })
}

onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
}

downloadFile(nume_fisier) {
  

this.http.get(`${this.url}/api/conferinta/filedownload/${nume_fisier}`)
    .subscribe((response: any) => {
      console.log(response);
      this.previewAnyFile.preview(
        "https://infraspaces.ams3.digitaloceanspaces.com/"+response
    ) .then((res): any => {
      console.log(res);
    })
    .catch((err: any): any => {
      console.log(err);
    });

  });
}


}
