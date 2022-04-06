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
  //  getAudioList() {
  //   if(localStorage.getItem("audiolist")) {
  //     this.audioList = JSON.parse(localStorage.getItem("audiolist"));
  //     console.log(this.audioList);
  //   }
  // }
  // ionViewWillEnter() {
  //   this.getAudioList();
  // }
  // startRecord() {
  //   if (this.platform.is('ios')) {
  //     this.fileName = 'record'+new Date().getDate()+new Date().getMonth()+new Date().getFullYear()+new Date().getHours()+new Date().getMinutes()+new Date().getSeconds()+'.3gp';
  //     this.filePath = this.file.documentsDirectory.replace(/file:\/\//g, '') + this.fileName;
  //     this.audio = this.media.create(this.filePath);
  //   } else if (this.platform.is('android')) {
  //     this.fileName = 'record'+new Date().getDate()+new Date().getMonth()+new Date().getFullYear()+new Date().getHours()+new Date().getMinutes()+new Date().getSeconds()+'.3gp';
  //     this.filePath = this.file.externalDataDirectory.replace(/file:\/\//g, '') + this.fileName;
  //     this.audio = this.media.create(this.filePath);
  //   }
  //   this.audio.startRecord();
  //   this.recording = true;
  // }
  // stopRecord() {
  //   this.audio.stopRecord();
  //   let data = { filename: this.fileName };
  //   this.audioList.push(data);
  //   localStorage.setItem("audiolist", JSON.stringify(this.audioList));
  //   this.recording = false;
  //   this.getAudioList();
  // }
  // playAudio(file,idx) {
  //   if (this.platform.is('ios')) {
  //     this.filePath = this.file.documentsDirectory.replace(/file:\/\//g, '') + file;
  //     this.audio = this.media.create(this.filePath);
  //   } else if (this.platform.is('android')) {
  //     this.filePath = this.file.externalDataDirectory.replace(/file:\/\//g, '') + file;
  //     this.audio = this.media.create(this.filePath);
  //   }
  //   this.audio.play();
  //   this.audio.setVolume(0.8);
  // }
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
    // console.log(this.url_conferinta)
    if(!this.url_conferinta){
      interval(30000).subscribe(x => {
        this.fetchUrl();
    });
  }
  else
  this.audio.startRecord();

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
  ////////////////meet
//   ngAfterViewInit(): void {

 
//     this.options = {
//         roomName: '42',
//         width: 900,
//         height: 500,
//         jwt:'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJqaXRzaSIsImlzcyI6InplbGxpbSIsInN1YiI6InZvaWNlLmluZnJhZ3JvdXAucm8iLCJyb29tIjoiNDIiLCJjb250ZXh0Ijp7InVzZXIiOnsibmFtZSI6IlBhY2llbnQgVXNlcjEgVXNlcjEifX19.DVpTGjXm56RTFGOiGcN6mqSkb_5E097We5yUFvISmCI',
//         configOverwrite: { prejoinPageEnabled: false },
//         // interfaceConfigOverwrite: {
//         //     // overwrite interface properties
//         // },
//         parentNode: document.querySelector('#jitsi-iframe'),
       
//     }

//     this.api = new JitsiMeetExternalAPI(this.domain, this.options);
// }
 ///////////////

}
