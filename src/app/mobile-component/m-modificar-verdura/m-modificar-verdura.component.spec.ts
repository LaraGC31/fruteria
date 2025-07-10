import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MModificarVerduraComponent } from './m-modificar-verdura.component';

describe('MModificarVerduraComponent', () => {
  let component: MModificarVerduraComponent;
  let fixture: ComponentFixture<MModificarVerduraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MModificarVerduraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MModificarVerduraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
