import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.scss']
})
export class PasswordFormComponent implements OnInit {
  hide = true;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });

    this.secondFormGroup = this.fb.group({
      smsCode: ['', [Validators.required, Validators.maxLength(6)]]
    });

    this.thirdFormGroup = this.fb.group({
      password: ['', [Validators.required]]
    });
  }

  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'Email is required' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  getSmsCodeErrorMessage() {
    return this.smsCode.hasError('required') ? 'SMS Code is required' :
      this.smsCode.hasError('length') ? 'SMS Code must be six digits long' :
        '';
  }

  get username() { return this.firstFormGroup.get('username'); }
  get email() { return this.firstFormGroup.get('email'); }
  get smsCode() { return this.secondFormGroup.get('smsCode'); }
  get password() { return this.thirdFormGroup.get('password'); }

}
