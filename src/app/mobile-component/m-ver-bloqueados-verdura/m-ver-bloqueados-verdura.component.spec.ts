import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MVerBloqueadosVerduraComponent } from './m-ver-bloqueados-verdura.component';

describe('MVerBloqueadosVerduraComponent', () => {
  let component: MVerBloqueadosVerduraComponent;
  let fixture: ComponentFixture<MVerBloqueadosVerduraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MVerBloqueadosVerduraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MVerBloqueadosVerduraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
