import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './public/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './public/register/register.module#RegisterPageModule' },
  { 
    path: 'home', loadChildren: './pages/customer/home/home.module#HomePageModule', canActivate: [AuthGuard],
  },
  {
    path: 'conferinta',
    loadChildren: () => import('./pages/customer/conferinta/conferinta.module').then( m => m.ConferintaPageModule)
  },

 

];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }