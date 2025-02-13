import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentarecuperadaComponent } from './cuentarecuperada.component';

describe('CuentarecuperadaComponent', () => {
  let component: CuentarecuperadaComponent;
  let fixture: ComponentFixture<CuentarecuperadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuentarecuperadaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuentarecuperadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
