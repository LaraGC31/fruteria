import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MFormularioFrutasVerdurasComponent } from './m-formulario-frutas-verduras.component';

describe('MFormularioFrutasVerdurasComponent', () => {
  let component: MFormularioFrutasVerdurasComponent;
  let fixture: ComponentFixture<MFormularioFrutasVerdurasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MFormularioFrutasVerdurasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MFormularioFrutasVerdurasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
