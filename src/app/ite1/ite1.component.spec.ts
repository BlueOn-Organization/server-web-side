import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ite1Component } from './ite1.component';

describe('Ite1Component', () => {
  let component: Ite1Component;
  let fixture: ComponentFixture<Ite1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ite1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ite1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
