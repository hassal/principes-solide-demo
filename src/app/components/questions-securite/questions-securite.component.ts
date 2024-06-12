import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-questions-securite',
  standalone:true,
  imports:[CommonModule,ReactiveFormsModule],
  templateUrl: './questions-securite.component.html',
  styleUrls: ['./questions-securite.component.css']
})
export class QuestionsSecuriteComponent implements OnInit {
  title: string;
  securityQuestionsForm: FormGroup;
  questions = [
    'Quel était le nom de votre premier animal de compagnie ?',
    'Quel est le nom de jeune fille de votre mère ?',
    'Quel était le nom de votre école primaire ?',
    'Quel était votre plat préféré quand vous étiez enfant ?'
  ];  

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.securityQuestionsForm = this.fb.group({
      question1: ['', Validators.required],
      answer1: ['', Validators.required],
      question2: ['', Validators.required],
      answer2: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.securityQuestionsForm.valid) {
      console.log('Formulaire soumis', this.securityQuestionsForm.value);
    } else {
      console.log('Le formulaire n\'est pas valide');
    }
  }
}
