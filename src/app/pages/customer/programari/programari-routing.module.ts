import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgramariPage } from './programari.page';

const routes: Routes = [
  {
    path: '',
    component: ProgramariPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgramariPageRoutingModule {}
