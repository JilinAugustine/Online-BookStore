import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
import { AuthService } from '../../../service/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdateProfileComponent } from '../../update-profile/update-profile.component';
import { User } from '../../../model/user.model';

@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrl: './adminheader.component.css'
})
export class AdminheaderComponent {

  url: string = '/';
  user: User = new User(0,"","","","","","","","","","");
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


