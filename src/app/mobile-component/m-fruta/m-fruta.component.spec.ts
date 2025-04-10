import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MFrutaComponent } from './m-fruta.component';

describe('MFrutaComponent', () => {
  let component: MFrutaComponent;
  let fixture: ComponentFixture<MFrutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MFrutaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MFrutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
