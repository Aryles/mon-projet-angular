import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {
  isAuth =false;

  //lastUpdate = new Date();
  lastUpdate = new Promise((resolve) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
    }
  )
  /*
  on a deporté le tableau des appereil 
  */
  appareils: any[];
  //App1 ="Machine a laver";
  //App2 ="Televison";
  //App3 ="Telephone";
  constructor(private appareilService: AppareilService) { // creaction de la varible 
    setTimeout(
  () => {
  this.isAuth= true;
  }, 4000
    );
  }
  
  ngOnInit(){ // creation de ngOnit
  this.appareils =this.appareilService.appareils;
  }
  onAllumer(){
    console.log('On allume tout !');
    this.appareilService.switchOnAll();
  }
  
  onEteindre(){
    this.appareilService.switchOffAll();
  }

}
