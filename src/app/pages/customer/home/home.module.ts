import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})

export class HomePageModule implements OnInit {
  
  constructor(private menu: MenuController, private authService: AuthenticationService) { 
    this.menu.enable(true);
  }

  ngOnInit() {
    
  }
}


// export class HomePageModule {}
