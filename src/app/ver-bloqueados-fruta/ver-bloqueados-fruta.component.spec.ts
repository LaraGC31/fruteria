import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerBloqueadosFrutaComponent } from './ver-bloqueados-fruta.component';

describe('VerBloqueadosFrutaComponent', () => {
  let component: VerBloqueadosFrutaComponent;
  let fixture: ComponentFixture<VerBloqueadosFrutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerBloqueadosFrutaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerBloqueadosFrutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
