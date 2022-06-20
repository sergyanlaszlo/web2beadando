import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { rootCertificates } from 'tls';
import { AppComponent } from '../app.component';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User | undefined;

  errorMessage!: string;

  loginForm: FormGroup = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder,
    private appComponent: AppComponent,
    private router: Router) { }

  ngOnInit(): void {
  }

  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  async login() {
    const username = await (this.loginForm.controls['username'].value);
    const password = await (this.loginForm.controls['password'].value);

     if (username === 'root') {
        if(password === 'root') {
          this.appComponent.isLoggedIn = true;
        } else {
          console.log('HIBÁS ADATOK!');
          this.appComponent.isLoggedIn = false;
        }
     } else {
      console.log('HIBÁS ADATOK!');
          this.appComponent.isLoggedIn = false;
     }
           
          



    if (this.appComponent.isLoggedIn) {
      this.router.navigateByUrl('/bankclient-list');
    } else {
      this.router.navigateByUrl('/');
    }
  }
}