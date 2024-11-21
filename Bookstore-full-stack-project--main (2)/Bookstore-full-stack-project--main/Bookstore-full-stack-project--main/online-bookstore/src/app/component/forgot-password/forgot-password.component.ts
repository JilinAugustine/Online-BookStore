import { Component } from '@angular/core';
import { take } from 'rxjs';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
  emailId: string= '';
  isShowChangePassword: boolean = false;
  newPassword: string = '';
  user: any;

  constructor(
    private authService:AuthService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const body = {
      emailId: this.emailId
    };
    this.authService.forgotPassword(body).pipe(take(1)).subscribe((res) => {
      if (!!res && res?.id) {
        this.user = res;
        this.isShowChangePassword = true;
      }
    }, err => {
      this.isShowChangePassword = false;
      alert("User not found . Please enter valid email.")
    });
  }

  onChangePassword(): void {
    this.user.password = this.newPassword;
    this.authService.changePassword(this.user?.id,this.newPassword).pipe(take(1)).subscribe((res) => {
      if (res && res.id) {
        alert("Password changed successfully");
        this.route.navigate(["/login"]);
      }
    }, error => {
      alert("Error occured while changing password.");
    });
  }
}
