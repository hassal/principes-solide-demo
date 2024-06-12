import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsSecuriteComponent } from './questions-securite.component';

describe('QuestionsSecuriteComponent', () => {
  let component: QuestionsSecuriteComponent;
  let fixture: ComponentFixture<QuestionsSecuriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionsSecuriteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionsSecuriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
