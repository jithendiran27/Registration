import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detail2Component } from './detail-2.component';

describe('Detail2Component', () => {
  let component: Detail2Component;
  let fixture: ComponentFixture<Detail2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Detail2Component]
    });
    fixture = TestBed.createComponent(Detail2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
