import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarusuarioComponent } from './solicitarusuario.component';

describe('SolicitarusuarioComponent', () => {
  let component: SolicitarusuarioComponent;
  let fixture: ComponentFixture<SolicitarusuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitarusuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitarusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
