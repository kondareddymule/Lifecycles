import { Component } from '@angular/core';
import { CycleComponent } from './cycle/cycle.component';


@Component({
  selector: 'app-root',
  imports: [CycleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
  InputValue: string = "";

  btnclicked(input: HTMLInputElement) {
    this.InputValue  = input.value
  }
}

