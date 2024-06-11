import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone:true,
  template: `
  <div class="signup-container">
  <h2>Inscription</h2>
  <form> 
    <div class="form-group">
      <label for="nom">Nom</label>
      <input type="text" id="nom" name="nom" ngModel required>
    </div>
    <div class="form-group">
      <label for="prenom">Prénom</label>
      <input type="text" id="prenom" name="prenom" ngModel required>
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" id="email" name="email" ngModel required>
    </div>
    <div class="form-group">
      <label for="motDePasse">Mot de passe</label>
      <input type="password" id="motDePasse" name="motDePasse" ngModel required>
    </div>
    <button (click)="creerCompteUtilisateur($event)">S'inscrire</button>
  </form>
</div>

`,
styles: [
  `
  .signup-container {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
  }
  
  .signup-container h2 {
    text-align: center;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 5px;
  }
  
  .form-group input {
    width: 96%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  `
]
})
export class AppComponent {
  
  creerCompteUtilisateur(event: Event){
    event.preventDefault();
    console.log('Enregistrement dans la BD');
    console.log('Envoie de l email et message de notification');
  }

}
