import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MPedidosComponent } from './m-pedidos.component';

describe('MPedidosComponent', () => {
  let component: MPedidosComponent;
  let fixture: ComponentFixture<MPedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MPedidosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
