import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDtailsFormComponent } from './add-dtails-form.component';

describe('AddDtailsFormComponent', () => {
  let component: AddDtailsFormComponent;
  let fixture: ComponentFixture<AddDtailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDtailsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDtailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
