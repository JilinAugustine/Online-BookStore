import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
import { AuthService } from '../../../service/auth.service';
import { User } from '../../../model/user.model';
import { UpdateProfileComponent } from '../../update-profile/update-profile.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-userheader',
  templateUrl: './userheader.component.html',
  styleUrl: './userheader.component.css'
})
export class UserheaderComponent {
  url: string = '/';
  user: User = new User(0,"","","","","","","","","","");
  // userId: string=localStorage.getItem('uid') || '1';
  constructor(
    private route: Router,
    private authService: AuthService,
    private dialog: MatDialog
  ) {
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo !== null) {
      this.user = JSON.parse(userInfo);
    }
  }


  ngOnInit(): void {
    this.route.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe((event: any) => {
      this.url = event?.url;
    });
  }
  gotourl(url: string): void {
    if (url === 'logout') {
      this.authService.clientLogout();
      return;
    }
    this.route.navigate(["/"+url]);
  }
  goToProfile(userId: any) {
    const dialogRef = this.dialog.open(UpdateProfileComponent, {
      data: { id: userId },
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '80%'
    });
    dialogRef.afterClosed().subscribe(() => {
      this.ngOnInit();
    });
  }
}
