import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {

  form!:FormGroup
  constructor(private fb:FormBuilder){}


ngOnInit() {

this.form = this.fb.group({
  nome:this.fb.control(null),
  cognome:this.fb.control(null),
  authData: this.fb.group({
    password:this.fb.control(null),
    confermaPassword:this.fb.control(null),
}),
genere:this.fb.control(null),
image:this.fb.control(null),
biografia:this.fb.control(null),
username:this.fb.control(null),
})

}
}



