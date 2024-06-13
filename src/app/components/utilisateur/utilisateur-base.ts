import { FormGroup } from '@angular/forms';
import { EnregistrementService } from '../../services/enregistrement.service';
import { UtilisateurInterface } from './utilisateur-interface';

export class UtilisateurBase implements UtilisateurInterface {

     titre: string = '';
     formulaire: FormGroup; 

     constructor(private enregistrementService: EnregistrementService, titre: string) 
     {
       this.titre = titre; 
     }

     enregistrer(event: Event)
     {
       event.preventDefault(); 
       this.enregistrementService.enregistrer();
     }

     verifierReponses(): boolean
     {
        return true;
     }
}
