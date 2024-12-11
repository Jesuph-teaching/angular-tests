import { TestBed } from '@angular/core/testing';
import { DataService } from './data.service';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';

describe('DataService', () => {
  let service: DataService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(DataService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should fetch date from http server', () => {
    const mockData = { id: 1, name: 'John Doe' };
    service.fetchData().subscribe((data) => {
      expect(data).toEqual(mockData);
    });
    const req = httpTestingController.expectOne('https://api.example.com/data');
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  });
  it('should return null if the request fails', () => {
    const mockError = { status: 404, statusText: 'Not Found' };
    service
      .fetchData()
      .pipe(
        // @ts-ignore
        catchError((error) => {
          expect(error.status).toEqual(404);
          expect(error.statusText).toEqual('Not Found');
        })
      )
      .subscribe((data) => {
        expect(data).toBeNull();
      });
    const req = httpTestingController.expectOne('https://api.example.com/data');
    expect(req.request.method).toBe('GET');
    req.flush(null, mockError);
  });
});
