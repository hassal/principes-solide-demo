import { EnregistrementService } from '../../services/enregistrement.service';
import { UtilisateurInterface } from './utilisateur-interface';

export class UtilisateurBase implements UtilisateurInterface {

     titre: string = '';
     
     constructor(private enregistrementService: EnregistrementService, titre: string) 
     {
       this.titre = titre; 
     }

     enregistrer(event: Event)
     {
       event.preventDefault(); 
       this.enregistrementService.enregistrer();
     }
}
