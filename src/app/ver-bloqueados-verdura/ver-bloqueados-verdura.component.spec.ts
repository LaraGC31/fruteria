import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerBloqueadosVerduraComponent } from './ver-bloqueados-verdura.component';

describe('VerBloqueadosVerduraComponent', () => {
  let component: VerBloqueadosVerduraComponent;
  let fixture: ComponentFixture<VerBloqueadosVerduraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerBloqueadosVerduraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerBloqueadosVerduraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
