import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MCarritoComponent } from './m-carrito.component';

describe('MCarritoComponent', () => {
  let component: MCarritoComponent;
  let fixture: ComponentFixture<MCarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MCarritoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
