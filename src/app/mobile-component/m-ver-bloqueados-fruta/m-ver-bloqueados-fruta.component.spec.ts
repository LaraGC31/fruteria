import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MVerBloqueadosFrutaComponent } from './m-ver-bloqueados-fruta.component';

describe('MVerBloqueadosFrutaComponent', () => {
  let component: MVerBloqueadosFrutaComponent;
  let fixture: ComponentFixture<MVerBloqueadosFrutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MVerBloqueadosFrutaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MVerBloqueadosFrutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
