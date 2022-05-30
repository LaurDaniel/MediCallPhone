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
  {
    path: 'programari',
    loadChildren: () => import('./pages/customer/programari/programari.module').then( m => m.ProgramariPageModule)
  },
  {
    path: 'arhiva',
    loadChildren: () => import('./pages/customer/arhiva/arhiva.module').then( m => m.ArhivaPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/customer/profile/profile.module').then( m => m.ProfilePageModule)
  },
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }