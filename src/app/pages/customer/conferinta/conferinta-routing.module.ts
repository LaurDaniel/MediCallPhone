import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConferintaPage } from './conferinta.page';

const routes: Routes = [
  {
    path: '',
    component: ConferintaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConferintaPageRoutingModule {}
