import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let httpTestingController: HttpTestingController;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    httpTestingController = TestBed.inject(HttpTestingController);

    fixture.detectChanges();
  });
  afterEach(() => {
    console.log('finished outside');
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('Data service integration tests', () => {
    afterEach(() => {
      httpTestingController.verify();
      console.log('finished inside');
    });
    it('should have the list from the service', () => {
      const mockData = ['mocked1', 'mocked2', 'mocked3'];
      const req = httpTestingController.expectOne(
        'https://api.example.com/data'
      );
      expect(req.request.method).toBe('GET');
      req.flush(mockData);
      fixture.detectChanges();
      expect(component.list()).toEqual(mockData);
    });
  });
});
