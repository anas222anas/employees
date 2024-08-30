import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDynamicFormComponent } from './view-dynamic-form.component';

describe('ViewDynamicFormComponent', () => {
  let component: ViewDynamicFormComponent;
  let fixture: ComponentFixture<ViewDynamicFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewDynamicFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewDynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
