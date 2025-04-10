import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MInicioComponent } from './m-inicio.component';

describe('MInicioComponent', () => {
  let component: MInicioComponent;
  let fixture: ComponentFixture<MInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MInicioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
