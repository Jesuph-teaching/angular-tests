import { Component } from '@angular/core';
import { OverHighlightDirective } from '../../directives/over-highlight.directive';

@Component({
  selector: 'app-counter',
  imports: [OverHighlightDirective],
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  counter: number = 0;
  increment() {
    this.counter++;
  }
  decrement() {
    this.counter--;
  }
  reset() {
    this.counter = 0;
  }
}
