import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authStatus: boolean; //1
  constructor(private authService : AuthService , private router: Router/*rajout de la petits variable */ ) { } //2

  ngOnInit() {
    this.authStatus= this.authService.isAuth;    //3
  }
onSignIn (){ //4
  this.authService.signIn().then(
    () => {
      console.log('Connetion réussie ! ');
      this.authStatus = this.authService.isAuth;
      this.router.navigate(['appareils']);// ceci nous permet de naviger vers le lien ici appareils
    }
  );
}

onSignOut(){// 5
  this.authService.signOut();
  this.authStatus = this.authService.isAuth;

}
  
}
