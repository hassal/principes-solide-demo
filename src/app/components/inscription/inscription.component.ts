import { Component } from '@angular/core';
import { EnregistrementService } from '../../services/enregistrement.service';
import { UtilisateurBase } from '../utilisateur/utilisateur-base';

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.css'
})

export class InscriptionComponent extends UtilisateurBase {

  constructor(enregistrementService: EnregistrementService) {
    const titre = 'Inscription';
    super(enregistrementService, titre);
  }

}
