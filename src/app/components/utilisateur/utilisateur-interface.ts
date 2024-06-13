import { FormGroup } from "@angular/forms";

export interface UtilisateurInterface {
     titre: string;
     formulaire: FormGroup;
     enregistrer(event: Event): void;  
}
