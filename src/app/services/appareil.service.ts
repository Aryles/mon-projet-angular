import { VirtualTimeScheduler, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class AppareilService {
    appareilSubject = new Subject <any[]>();
    private appareils = [
        {
        id:1,
            name: 'Machine a laver',
        status:'éteint'
        },
        {
          id:2,
            name: 'Télevision',
          status:'allumé'
          },
          {
              id:3,
            name: 'Ordinateur',
            status:'éteint'
            }
      
      ];
      constructor(private httpClient: HttpClient){}
      emitAppareilSubjetct() {
          this.appareilSubject.next(this.appareils.slice())
      }

      getAppareilById(id: number){
          const appareil = this.appareils.find(
(appareilObjetct) => {
    return appareilObjetct.id === id;
}

          );
          return appareil;
      }

      switchOnAll(){
          for(let appareil of this.appareils) {
              appareil.status = 'allumé'
              
          }
          this.emitAppareilSubjetct();
      }
      switchOffAll(){
          for (let appareil of this.appareils){
              appareil.status = 'éteint'
          }
          this.emitAppareilSubjetct();

        }
      switchOnOne(index:number){
          this.appareils[index].status = 'allumé';
          this.emitAppareilSubjetct();

        }
      switchOffOne(index:number){
        this.appareils[index].status = 'éteint';
        this.emitAppareilSubjetct();

    }
    //methode pour ajouter un appareil a liste.
    addAppareil(name: string, status:string){
        const appareilObjetct = {
id: 0,
name: '',
status: ''        
};
appareilObjetct.name = name;
appareilObjetct.status= status;
appareilObjetct.id = this.appareils[(this.appareils.length -1)].id +1;

this.appareils.push(appareilObjetct);
this.emitAppareilSubjetct();


}
savaAppareilsToServer(){
    this.httpClient.put('https://http-client-demo-ca6dd.firebaseio.com/appareils.json', this.appareils).subscribe(()=>{
        console.log('Enregistrement terminé !');
    },
    (error) =>{
        console.log('Erreur de sauvegarde !' + error);
    }
    )

}
getAppareilFromServer(){
    this.httpClient.get<any>('https://http-client-demo-ca6dd.firebaseio.com/appareils.json').subscribe((response) => {
        this.appareils = response;
        this.emitAppareilSubjetct();
    },
    (error) => {
        console.log('Erreur de chargement !' +error);
    });
}

}