import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
isAuth =false;
appareils = [
  {
  name: 'Machine a laver',
  status:'éteint'
  },
  {
    name: 'Télevision',
    status:'allumé'
    },
    {
      name: 'Ordinateur',
      status:'éteint'
      }

];
//App1 ="Machine a laver";
//App2 ="Televison";
//App3 ="Telephone";
constructor() {
  setTimeout(
() => {
this.isAuth= true;
}, 4000
  );
}
onAllumer(){
  console.log('On allume tout !');
}


}
