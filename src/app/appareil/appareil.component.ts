import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
@Input() AppareilName: string;
 @Input() AppareilStatus :string;
  
  constructor() { }

  ngOnInit() {
  }
getStatus(){
  return this.AppareilStatus;
}
}
