import { Component } from '@angular/core';

import { InscriptionComponent } from './components/inscription/inscription.component';
import { QuestionsSecuriteComponent } from './components/questions-securite/questions-securite.component';
import { UtilisateurComponent } from './components/utilisateur/utilisateur.component';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [InscriptionComponent,QuestionsSecuriteComponent,UtilisateurComponent],
  templateUrl: './app.component.html'
})

export class AppComponent {

    
}
