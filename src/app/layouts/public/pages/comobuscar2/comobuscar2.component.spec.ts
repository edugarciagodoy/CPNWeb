import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comobuscar2Component } from './comobuscar2.component';

describe('Comobuscar2Component', () => {
  let component: Comobuscar2Component;
  let fixture: ComponentFixture<Comobuscar2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Comobuscar2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Comobuscar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
