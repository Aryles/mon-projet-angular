import { VirtualTimeScheduler } from 'rxjs';

export class AppareilService {
    appareils = [
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
      }
      switchOffAll(){
          for (let appareil of this.appareils){
              appareil.status = 'éteint'
          }
      }
      switchOnOne(index:number){
          this.appareils[index].status = 'allumé';
      }
      switchOffOne(index:number){
        this.appareils[index].status = 'éteint';
    }
}