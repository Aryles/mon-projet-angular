import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
@Input() AppareilName: string;
 @Input() AppareilStatus :string;
 @Input()  indexOfAppareil: number;
  
  constructor(private appareilService: AppareilService) { }

  ngOnInit() {
  }
getStatus(){
  return this.AppareilStatus;
}
getColor(){
  if (this.AppareilStatus === 'allumé'){
    return 'green';
  } else if(this.AppareilStatus === 'éteint') {
return 'red';
  }
}

onSwitchOn(){
  this.appareilService.switchOnOne(this.indexOfAppareil);
}
onSwitchOff(){
  this.appareilService.switchOffOne(this.indexOfAppareil);
}

}
