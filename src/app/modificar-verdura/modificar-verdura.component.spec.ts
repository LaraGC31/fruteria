import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarVerduraComponent } from './modificar-verdura.component';

describe('ModificarVerduraComponent', () => {
  let component: ModificarVerduraComponent;
  let fixture: ComponentFixture<ModificarVerduraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModificarVerduraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarVerduraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
