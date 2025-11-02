import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MathsPage } from './maths.page';

describe('MathsPage', () => {
  let component: MathsPage;
  let fixture: ComponentFixture<MathsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MathsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
