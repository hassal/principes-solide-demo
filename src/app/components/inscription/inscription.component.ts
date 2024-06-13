import { Component, ContentChild } from '@angular/core';
import { EnregistrementService } from '../../services/enregistrement.service';
import { UtilisateurBase } from '../utilisateur/utilisateur-base';
import { QuestionsSecuriteComponent } from '../questions-securite/questions-securite.component';

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.css'
})

export class InscriptionComponent extends UtilisateurBase {

  @ContentChild(QuestionsSecuriteComponent)
  content?: QuestionsSecuriteComponent;

  constructor(enregistrementService: EnregistrementService) {
    const titre = 'Inscription';
    super(enregistrementService, titre);
  }

  ngAfterContentInit(): void {

    if(this.content){
      this.content.verifierReponses();
    }

  }

}
