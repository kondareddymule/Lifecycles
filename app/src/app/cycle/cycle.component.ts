import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-cycle',
  imports: [],
  templateUrl: './cycle.component.html',
  styleUrl: './cycle.component.css'
})
export class CycleComponent {
  @Input() message : string = "";

  ngOnChanges(changes: SimpleChanges){
    console.log(changes)
    console.log(changes['message']['previousValue'])
  }

  ngOnInit() {
    console.log("Hi There")
  }

  ngDoCheck() {
    console.log("Ng Do Check")
  }

  ngAfterContentInit() {
    console.log("After")
  }

  ngOnDestroy() {
    console.log('Destroy called');
  }
}

