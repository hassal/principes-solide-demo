import { Injectable } from '@angular/core';

import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class EnregistrementService {

  constructor(private notificationService: NotificationService) { }

  enregistrer()
  {
    console.log('Logique enregistrement');
    /*
    .
    .
    */
    
    this.notificationService.envoyerNotification();
  }
}
