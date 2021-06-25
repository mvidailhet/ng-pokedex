import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserModelDrivenComponent } from './create-user-model-driven.component';

describe('CreateUserModelDrivenComponent', () => {
  let component: CreateUserModelDrivenComponent;
  let fixture: ComponentFixture<CreateUserModelDrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUserModelDrivenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUserModelDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
