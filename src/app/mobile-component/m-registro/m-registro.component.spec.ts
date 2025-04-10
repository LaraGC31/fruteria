import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MRegistroComponent } from './m-registro.component';

describe('MRegistroComponent', () => {
  let component: MRegistroComponent;
  let fixture: ComponentFixture<MRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MRegistroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
