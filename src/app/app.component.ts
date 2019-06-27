import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
isAuth =false;
App1 ="Machine a laver";
App2 ="Televison";
App3 ="Telephone";
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
