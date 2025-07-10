import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MModificarFrutaComponent } from './m-modificar-fruta.component';

describe('MModificarFrutaComponent', () => {
  let component: MModificarFrutaComponent;
  let fixture: ComponentFixture<MModificarFrutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MModificarFrutaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MModificarFrutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
