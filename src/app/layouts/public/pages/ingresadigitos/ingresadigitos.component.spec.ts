import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresadigitosComponent } from './ingresadigitos.component';

describe('IngresadigitosComponent', () => {
  let component: IngresadigitosComponent;
  let fixture: ComponentFixture<IngresadigitosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngresadigitosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresadigitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
