import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';
import { from } from 'rxjs';
import {AppareilService} from "./services/appareil.service";
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component'; // import des service.
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuard } from './services/auth-gard.service';

const appRoutes: Routes = [ // 1- creation des routes 
  {
    path: 'appareils',
  canActivate:[AuthGuard],
    component: AppareilViewComponent //ceci veut dire de localhost/appareils charge le component appareil-view  
  
    },
  {
    path: 'auth',
  

    component: AuthComponent
  },
  {
    path: '', 
    canActivate:[AuthGuard],
    component: AppareilViewComponent
  },
  {
    path: 'appareils/:id', 
    canActivate:[AuthGuard],
    component: SingleAppareilComponent
  
  },
  {
path:'not-found', component : FourOhFourComponent

  },
  {
    path: '**', redirectTo: '/not-found'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes) // 2- rajout des imports, ceci veut dire de rajouter toute les routes de appRoute.
  ],
  providers: [
    AppareilService, // creation de l'instance et injection du service.
  AuthService,
  AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
