import { Component } from '@angular/core';

import { InscriptionComponent } from './components/inscription/inscription.component';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [InscriptionComponent],
  templateUrl: './app.component.html'
})

export class AppComponent {

    
}
