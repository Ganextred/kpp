import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Mkr1Page } from './mkr1.page';

describe('Mkr1Page', () => {
  let component: Mkr1Page;
  let fixture: ComponentFixture<Mkr1Page>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(Mkr1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
