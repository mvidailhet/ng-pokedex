import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-create-user-model-driven",
  templateUrl: "./create-user-model-driven.component.html",
  styleUrls: ["./create-user-model-driven.component.scss"],
})
export class CreateUserModelDrivenComponent implements OnInit {
  userForm: FormGroup;

  constructor() {
    this.userForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl("Mitch", Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
      }),
      comment: new FormControl(null),
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.userForm);
  }

  get username(): FormControl {
    return this.userForm.get("userData.username") as FormControl;
  }

  get email(): FormControl {
    return this.userForm.get("userData.email") as FormControl;
  }
}
