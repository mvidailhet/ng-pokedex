import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-user-model-driven',
  templateUrl: './create-user-model-driven.component.html',
  styleUrls: ['./create-user-model-driven.component.scss']
})
export class CreateUserModelDrivenComponent implements OnInit {
  userForm: FormGroup;

  constructor() { 
    this.userForm = new FormGroup({
      username: new FormControl('Mitch'),
      email: new FormControl(),
    });
  }

  ngOnInit(): void {
  }

}
