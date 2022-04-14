import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService, Toast } from '@ngneat/hot-toast';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',Validators.required),
  });

  constructor(
    private authServices: AuthenticationService,
     private router:Router,
     private toast:HotToastService
     ) { }

  ngOnInit(): void {}
  get email(){
    return this.loginForm.get('email');
  }
  get password(){
    return this.loginForm.get('password');
  }
  submit(){
    if(!this.loginForm.valid){return;}

    const {email,password} = this.loginForm.value;
    this.authServices.login(email,password).pipe(this.toast.observe({
      success:'Mara7be bik',
      loading: 'Loading....',
      error:'Ghalta !!! '
    })).subscribe(()=>{
      this.router.navigate(['/home']);
    });
  }

}
