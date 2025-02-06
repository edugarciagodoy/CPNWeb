import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestiondeusuariosComponent } from './gestiondeusuarios.component';

describe('GestiondeusuariosComponent', () => {
  let component: GestiondeusuariosComponent;
  let fixture: ComponentFixture<GestiondeusuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestiondeusuariosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestiondeusuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
