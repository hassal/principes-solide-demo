import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EnregistrementService } from '../../services/enregistrement.service';

@Component({
  selector: 'app-utilisateur',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './utilisateur.component.html',
  styleUrl: './utilisateur.component.css',
  providers:[EnregistrementService]
})
export class UtilisateurComponent implements OnInit{
  @Input()
  typeComposant: 'inscription' | 'questions' = 'inscription';
  title: string;
  securityQuestionsForm: FormGroup; 
  questions = [
    'Quel était le nom de votre premier animal de compagnie ?',
    'Quel est le nom de jeune fille de votre mère ?',
    'Quel était le nom de votre école primaire ?',
    'Quel était votre plat préféré quand vous étiez enfant ?'
  ];  

  constructor(private fb: FormBuilder,private enregistrementService: EnregistrementService) { }

  ngOnInit(): void {
    this.securityQuestionsForm = this.fb.group({
      question1: ['', Validators.required],
      answer1: ['', Validators.required],
      question2: ['', Validators.required],
      answer2: ['', Validators.required]
    });
    console.log(this.typeComposant);
  }

  onSubmit() {
    if (this.securityQuestionsForm.valid) {
      console.log('Formulaire soumis', this.securityQuestionsForm.value);
    } else {
      console.log('Le formulaire n\'est pas valide');
    }
  }

  creerCompteUtilisateur(event: Event) 
  {
    event.preventDefault(); 
    this.enregistrementService.enregistrerUtilisateur();
  }

}
