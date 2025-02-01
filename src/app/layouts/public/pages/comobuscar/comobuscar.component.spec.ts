import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComobuscarComponent } from './comobuscar.component';

describe('ComobuscarComponent', () => {
  let component: ComobuscarComponent;
  let fixture: ComponentFixture<ComobuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComobuscarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComobuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
