import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MVerPedidosComponent } from './m-ver-pedidos.component';

describe('MVerPedidosComponent', () => {
  let component: MVerPedidosComponent;
  let fixture: ComponentFixture<MVerPedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MVerPedidosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MVerPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
