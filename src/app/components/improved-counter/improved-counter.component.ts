import { Component, computed, signal } from '@angular/core';
const dzd = new Intl.NumberFormat('en', {
  currency: 'DZD',
  style: 'currency',
});

@Component({
  selector: 'app-improved-counter',
  imports: [],
  templateUrl: './improved-counter.component.html',
  styleUrl: './improved-counter.component.css',
})
export class ImprovedCounterComponent {
  counter = signal(0);
  formattedCounter = computed(() => {
    return dzd.format(this.counter());
  });
  increment() {
    this.counter.update((prev) => prev + 1);
  }
  decrement() {
    this.counter.update((prev) => prev - 1);
  }
  reset() {
    this.counter.set(0);
  }
}
