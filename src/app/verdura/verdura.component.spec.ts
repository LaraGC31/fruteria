import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerduraComponent } from './verdura.component';

describe('VerduraComponent', () => {
  let component: VerduraComponent;
  let fixture: ComponentFixture<VerduraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerduraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerduraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
