export interface UtilisateurInterface {
     titre: string;
     enregistrer(event: Event): void;
     verifierReponses(): boolean;
}
