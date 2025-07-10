import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarFrutaComponent } from './modificar-fruta.component';

describe('ModificarFrutaComponent', () => {
  let component: ModificarFrutaComponent;
  let fixture: ComponentFixture<ModificarFrutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModificarFrutaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarFrutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
