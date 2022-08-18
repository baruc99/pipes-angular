import { Component,  } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent  {

  nombreLower: string = 'baruc';
  nombreUpper: string = 'BARUC';
  nombreCompleto: string = 'bArUc SaNcHeZ';


  fecha: Date = new Date();

}
