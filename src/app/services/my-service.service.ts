import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MyServiceService {
  fetchData(): Observable<string[]> {
    // Simulating a data fetch
    return of(['Item1', 'Item2']);
  }
}
