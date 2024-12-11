import { Component, inject, OnInit, signal } from '@angular/core';
import { MyServiceService } from '../../services/my-service.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list',
  imports: [],
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  list = signal<string[]>([]);
  myService = inject(DataService);
  ngOnInit(): void {
    this.myService.fetchData().subscribe((data) => {
      this.list.set(data);
    });
  }
}
