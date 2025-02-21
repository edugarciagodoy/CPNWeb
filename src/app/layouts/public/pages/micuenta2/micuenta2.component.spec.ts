import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Micuenta2Component } from './micuenta2.component';

describe('Micuenta2Component', () => {
  let component: Micuenta2Component;
  let fixture: ComponentFixture<Micuenta2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Micuenta2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Micuenta2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
