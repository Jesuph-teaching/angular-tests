import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { ImprovedCounterComponent } from './components/improved-counter/improved-counter.component';
import { ListComponent } from './components/list/list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CounterComponent, ImprovedCounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'test-project';
}
