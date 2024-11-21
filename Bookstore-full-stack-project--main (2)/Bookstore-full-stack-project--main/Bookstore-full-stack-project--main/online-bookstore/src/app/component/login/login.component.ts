import { Component } from '@angular/core';
import { User } from '../../model/user.model';
import { AuthService } from '../../service/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  pass:string = '';
  cpass:string='';
  user: User=new User(0,"","","","","","","","","","");
  errorMessage: string = '';
  showForgotPassword: boolean = false;
  isFormSubmitted: boolean = false;
  loginForm = new FormGroup<any>({});
   constructor(private authService: AuthService, private router: Router,private fb:FormBuilder) {
     //const pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/; 
     this.loginForm = this.fb.group({
       email: ['', [Validators.required]],
       password: [null, Validators.compose([Validators.required, Validators.minLength(8)])]
     });
   }
   
 
   
   onSubmit() {
     this.user.emailId=this.loginForm.controls['email'].value;
     this.user.password=this.loginForm.controls['password'].value;
     
     this.authService.loginUser(this.user).subscribe(
       (response: any) => {
         if (response?.activateAccount === false) {
           alert("Your account is not activated . Please check after some time.")
         } else {
           console.log("***response****",response);
           this.authService.storeLoggedInUser(this.user);
           localStorage.setItem('userInfo', JSON.stringify(response));
           localStorage.setItem('uname', response?.name);
           localStorage.setItem('uId', response?.id);
           localStorage.setItem('role', response?.role);
           console.log("***role****",response?.role);
           if (response?.role === 'user') {
            console.log("***role****",response?.role);
            this.router.navigate(['/userhome']);
           } else {
            this.router.navigate(['/admindashboard']);
           }
         }
         
       },
       (error: any) => {
         console.error('Login failed:', error);
         console.log('>>>>>>>>>>>>>>>>>>', error?.error?.message );
         if (error?.error?.message === 'User not found') {
           this.errorMessage = "User Not found. Please check your email or password."
           return;
         }
         if (error.status === 401 || error.status === 404) {
           this.errorMessage = 'Invalid username or password';
         } else {
           this.errorMessage = 'An unexpected error occurred. Please try again later.';
         }
       }
     );
   }
   
   
 
   resetForm() {
 
     this.user.emailId = '';
     this.user.password = '';
   }
 
   onForgotPassword() {
    // Navigate to the Forgot Password page
    this.router.navigate(['/forgot-password']);
  }
   }
 
