import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterBeaconComponent } from './register-beacon.component';

describe('RegisterBeaconComponent', () => {
  let component: RegisterBeaconComponent;
  let fixture: ComponentFixture<RegisterBeaconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterBeaconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterBeaconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
