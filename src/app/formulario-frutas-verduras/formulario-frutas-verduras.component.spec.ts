import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioFrutasVerdurasComponent } from './formulario-frutas-verduras.component';

describe('FormularioFrutasVerdurasComponent', () => {
  let component: FormularioFrutasVerdurasComponent;
  let fixture: ComponentFixture<FormularioFrutasVerdurasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioFrutasVerdurasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioFrutasVerdurasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
