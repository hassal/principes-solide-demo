import { Component } from '@angular/core';
import { UtilisateurComponent } from './components/utilisateur/utilisateur.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UtilisateurComponent],
  templateUrl: './app.component.html'
})

export class AppComponent {

}
