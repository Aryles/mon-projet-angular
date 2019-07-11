import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription} from 'rxjs-compat';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy  { // on dois implementé on init

seconde: number;
counterSubscription: Subscription;

  constructor(){
}

ngOnInit(){
  const counter = Observable.interval(1000);
 /* counter.subscribe(
    (value: number) => {
      this.seconde = value;
    },
    (error: any) => {
console.log('Une erreur a été recontrée !');
    },
    () => {
      console.log('Observable complétée');
    }
    );
  */ // anciennne methode
  this.counterSubscription = counter.subscribe(
    (value: number) => {
      this.seconde = value;
    }
  );
}
ngOnDestroy (){
  this.counterSubscription.unsubscribe();
}

}


