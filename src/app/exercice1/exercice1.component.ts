import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrl: './exercice1.component.scss'
})
export class Exercice1Component {
  name = "number";
  public content: number = 0;
  increment() {
    this.content++;
  }
}
