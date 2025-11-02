import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BiologyPage } from './biology.page';

describe('BiologyPage', () => {
  let component: BiologyPage;
  let fixture: ComponentFixture<BiologyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BiologyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
