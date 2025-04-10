import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MVerduraComponent } from './m-verdura.component';

describe('MVerduraComponent', () => {
  let component: MVerduraComponent;
  let fixture: ComponentFixture<MVerduraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MVerduraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MVerduraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
