import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosUsuariosComponent } from './datos-usuarios.component';

describe('DatosUsuariosComponent', () => {
  let component: DatosUsuariosComponent;
  let fixture: ComponentFixture<DatosUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatosUsuariosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
