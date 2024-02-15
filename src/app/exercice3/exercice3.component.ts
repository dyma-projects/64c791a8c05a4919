import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice3',
  templateUrl: './exercice3.component.html',
  styleUrl: './exercice3.component.scss'
})
export class Exercice3Component {
  public salut: boolean = true;

  public inversement() {
    this.salut = ! this.salut;
    console.log(this.salut);
    
  }
}
