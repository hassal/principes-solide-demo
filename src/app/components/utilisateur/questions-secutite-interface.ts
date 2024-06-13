import { FormGroup } from "@angular/forms";

export interface QuestionsSecutite {
     formulaire: FormGroup;
     verifierReponses(): boolean;  
}
