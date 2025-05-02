import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MDatosUsuariosComponent } from './m-datos-usuarios.component';

describe('MDatosUsuariosComponent', () => {
  let component: MDatosUsuariosComponent;
  let fixture: ComponentFixture<MDatosUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MDatosUsuariosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MDatosUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
