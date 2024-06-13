import { Component, ContentChild, Input } from '@angular/core';
import { QuestionsSecuriteComponent } from '../questions-securite/questions-securite.component';

@Component({
  selector: 'app-utilisateur',
  standalone: true,
  imports: [],
  templateUrl: './utilisateur.component.html',
  styleUrl: './utilisateur.component.css'
})

export class UtilisateurComponent {

  @Input() titre: string; 
  @ContentChild(QuestionsSecuriteComponent)
  content?: QuestionsSecuriteComponent;

  ngAfterContentInit(): void {

    if(this.content){ 
      this.content.verifierReponses();
    }

  }

}
