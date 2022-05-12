import { Component, OnInit } from '@angular/core';
import { MenuController, AlertController } from '@ionic/angular';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { ViewEncapsulation } from '@angular/core';
import { IonLoaderService } from 'src/app/services/ion-loader.service';
import { PreviewAnyFile } from '@ionic-native/preview-any-file/ngx';
@Component({
  selector: 'app-arhiva',
  templateUrl: './arhiva.page.html',
  styleUrls: ['./arhiva.page.scss'],
})
export class ArhivaPage implements OnInit {

  constructor(private http: HttpClient,private menu: MenuController,  private alertCtrl: AlertController,private ionLoaderService: IonLoaderService,private previewAnyFile: PreviewAnyFile) { 
    this.menu.enable(true);
  }
  public programari: any;
  pageOfItems: Array<any>;
  // url = "https://probe.infragroup.ro";
  url = "https://medicall.medicover.ro";

  ngOnInit() {
    this.ionLoaderService.simpleLoader();
    this.menu.enable(true);
 
  
    this.http.get(`${this.url}/api/arhiva/getconsults/${localStorage.getItem("user_id")}`).subscribe(data=>{
    // this.http.get(`http://127.0.0.1:8000/api/arhiva/getconsults/49`).subscribe(data=>{
      console.log(data);
      this.programari = data['programari'];
      this.ionLoaderService.dismissLoader();
    
    })
    
   
  }
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

  generateRap(id_raport){
    this.http.get(`${this.url}/api/arhiva/generate/${id_raport}`).subscribe(data=>{
      console.log(data['file']);
      this.previewAnyFile.preview(
        "https://infraspaces.ams3.digitaloceanspaces.com/"+data['file']
    ) .then((res): any => {
      console.log(res);
    })
    .catch((err: any): any => {
      console.log(err);
    });
    
    })
  }

}
