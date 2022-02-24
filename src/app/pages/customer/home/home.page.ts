import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private menu: MenuController, private authService: AuthenticationService) { 
    this.menu.enable(true);
  }

  ngOnInit() {
    // this.menu.enable(true);
  }

}
