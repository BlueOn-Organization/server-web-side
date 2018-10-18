import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ite2Component } from './ite2.component';

describe('Ite2Component', () => {
  let component: Ite2Component;
  let fixture: ComponentFixture<Ite2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ite2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ite2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
