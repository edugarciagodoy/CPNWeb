import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaclaveComponent } from './nuevaclave.component';

describe('NuevaclaveComponent', () => {
  let component: NuevaclaveComponent;
  let fixture: ComponentFixture<NuevaclaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevaclaveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevaclaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
