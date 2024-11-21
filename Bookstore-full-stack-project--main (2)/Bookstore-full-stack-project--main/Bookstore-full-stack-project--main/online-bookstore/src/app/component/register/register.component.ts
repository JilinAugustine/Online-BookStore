import { Component } from '@angular/core';
import { User } from '../../model/user.model';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  errorMessage: string  = '';
  user: User = new User(0,"","","","","","","","","","");
  minDate: any;
  constructor(private authService: AuthService, private router: Router ) {
    const todayDate = new Date();
    this.minDate = (todayDate?.getFullYear() - 18) + '-' + (todayDate?.getMonth() + 1) + '-' + todayDate?.getDate();
  }
 
  onSubmit() {
    if (this.user.name === '') {
      this.errorMessage = 'First name should not be blank';
      document.getElementById('errordiv')?.scrollIntoView(true);
      return;
    }
    if (this.user.name.length <3 ) {
      this.errorMessage = 'First name should be more than 3 chracter';
      document.getElementById('errordiv')?.scrollIntoView(true);
      return;
    }
    const username =  (/^[A-Za-z]+$/) ;
    if(!username.test(this.user.name))
    {
      alert('User Name Only Contain Letters');
      return;
    }
    const gender =  (/^[A-Za-z]+$/) ;
    if(!gender.test(this.user.gender))
    {
      alert('Gender Only Contain Letters');
      return;
    }
    const district =  (/^[A-Za-z]+$/) ;
    if(!district.test(this.user.district))
    {
      alert('District Only Contain Letters');
      return;
    }
    const state =  (/^[A-Za-z]+$/) ;
    if(!state.test(this.user.state))
    {
      alert('State Only Contain Letters');
      return;
    }
    if (this.user.emailId === '' ) {
      this.errorMessage = 'Email should not be blank';
      document.getElementById('errordiv')?.scrollIntoView(true);
      return;
    }
    const regularExpression = /^[_A-Za-z0-9-\\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/;
    if (!regularExpression.test(this.user.emailId)) {
      document.getElementById('errordiv')?.scrollIntoView(true);
      this.errorMessage = 'Email is not valid';
      return;
    }
   
    const passwordPatter = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;
    if (!passwordPatter.test(this.user.password)) {
      alert('Password must have minimum eight characters, at least one letter and one number, one special chracter');
      return
    }
    // this.user.role="user";
    // console.log('>>>>>', this.user)

    this.errorMessage = '';
   
//this.user.role = "admin";
this.user.role = "user"; 
 console.log(this.user);
    this.authService.registerUser(this.user).pipe(take(1)).subscribe(
      (data:any ) => {
        alert("User created with account");
        this.router.navigate(['/login']);
      }, error => {
       
        const message = error?.error?.message;
        console.log("************",message)
        if (message && message.includes('[Duplicate entry ')) {
          alert("Username / Email / Mobile already available. Please use differnt one.");
        } else {
          alert("Something went wrong while registration.");
        }
      }
      
    )
  }

  goBack() {
    this.router.navigate(['/login']); // Replace 'login' with the actual path to your login page
  }
}
