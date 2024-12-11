/* import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OverHighlightDirective } from './over-highlight.directive';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
@Component({
  imports: [OverHighlightDirective],
  template: `<p appOverHighlight [highlightValue]="value">Test Text</p>`,
})
class TestComponent {
  value = 4;
}
describe('OverHighlightDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestComponent, OverHighlightDirective],
    });
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('overHighlight on component', () => {
    it('should change background color if value over 4', () => {
      component.value = 5;
      console.log(
        'native element',
        fixture.debugElement.query(By.css('input'))
      );
      /* const bg =
        fixture.nativeElement.getElementByTag('input').style.backgroundColor;
      expect(bg).toEqual('cyan');  * /
    });
  });
});
 */
