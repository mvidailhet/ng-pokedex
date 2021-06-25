import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserTemplateDrivenComponent } from './create-user-template-driven.component';

describe('CreateUserTemplateDrivenComponent', () => {
  let component: CreateUserTemplateDrivenComponent;
  let fixture: ComponentFixture<CreateUserTemplateDrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUserTemplateDrivenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUserTemplateDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
