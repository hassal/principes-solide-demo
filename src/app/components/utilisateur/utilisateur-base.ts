import { EnregistrementService } from '../../services/enregistrement.service';

export class UtilisateurBase {

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
