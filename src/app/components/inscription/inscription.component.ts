import { Component } from '@angular/core';
import { EnregistrementService } from '../../services/enregistrement.service';

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.css'
})

export class InscriptionComponent {

  constructor(private enregistrementService: EnregistrementService) { }

  creerCompteUtilisateur(event: Event) 
  {
    event.preventDefault(); 
    this.enregistrementService.enregistrerUtilisateur();
  }
}
