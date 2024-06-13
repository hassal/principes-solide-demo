import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EnregistrementService } from '../../services/enregistrement.service';
import { UtilisateurBase } from '../utilisateur/utilisateur-base';
import { QuestionsSecutite } from '../utilisateur/questions-secutite-interface';

@Component({
  selector: 'app-questions-securite', 
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './questions-securite.component.html',
  styleUrls: ['./questions-securite.component.css']
})

export class QuestionsSecuriteComponent extends UtilisateurBase implements OnInit, QuestionsSecutite {

  formulaire: FormGroup;

  questions = [
    'Quel était le nom de votre premier animal de compagnie ?',
    'Quel est le nom de jeune fille de votre mère ?',
    'Quel était le nom de votre école primaire ?',
    'Quel était votre plat préféré quand vous étiez enfant ?'
  ];

  constructor(private fb: FormBuilder, enregistrementService: EnregistrementService) {
    const titre = 'Questions de sécurité';
    super(enregistrementService, titre);
  }

  ngOnInit(): void {
    this.formulaire = this.fb.group({
      question1: ['', Validators.required],
      answer1: ['', Validators.required],
      question2: ['', Validators.required],
      answer2: ['', Validators.required]
    });
  }

  override enregistrer(event: Event) {
    if (this.verifierReponses()) {
      console.log('Les réponses ont été soumises', this.formulaire.value);
      super.enregistrer(event);
    } else {
      console.log('Les réponses ne sont pas valides');
    }
  }

  verifierReponses() {
    console.log('Vérification des réponses ...');
    return this.formulaire.valid;
  }

}