import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detail5Component } from './detail-5.component';

describe('Detail5Component', () => {
  let component: Detail5Component;
  let fixture: ComponentFixture<Detail5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Detail5Component]
    });
    fixture = TestBed.createComponent(Detail5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
