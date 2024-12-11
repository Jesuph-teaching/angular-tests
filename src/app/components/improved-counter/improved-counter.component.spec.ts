import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprovedCounterComponent } from './improved-counter.component';

describe('ImprovedCounterComponent', () => {
  let component: ImprovedCounterComponent;
  let fixture: ComponentFixture<ImprovedCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImprovedCounterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ImprovedCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should initialize with 0', () => {
    expect(component.counter()).toEqual(0);
  });
  it('should be 1 on increment', () => {
    component.increment();
    fixture.detectChanges();
    expect(component.counter()).toEqual(1);
  });
  it('should have dzd in formattedCounter', () => {
    component.increment();
    console.log('computed', component.formattedCounter());
    expect(component.formattedCounter()).toContain('DZD');
  });
});
