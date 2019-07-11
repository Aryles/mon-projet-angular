import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppareilService } from '../services/appareil.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-edit-appareil',
  templateUrl: './edit-appareil.component.html',
  styleUrls: ['./edit-appareil.component.scss']
})
export class EditAppareilComponent implements OnInit {
defaultOnOff = 'éteint'
// injection du service.  
constructor(private appareilService: AppareilService, private router: Router) { }

  ngOnInit() {
  }
onSubmit(form: NgForm){

  //console.log(form.value);
 //recuperation des elements
  const name = form.value['name'];
  const status = form.value['status'];
this.appareilService.addAppareil(name,status); 
this.router.navigate(['/appareils']);
}
}
