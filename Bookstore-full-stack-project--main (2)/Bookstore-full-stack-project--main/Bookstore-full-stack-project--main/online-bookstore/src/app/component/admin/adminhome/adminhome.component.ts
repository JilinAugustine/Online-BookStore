import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { User } from '../../../model/user.model';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs';
import { UpdateProfileComponent } from '../../update-profile/update-profile.component';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrl: './adminhome.component.css'
})
export class AdminhomeComponent implements OnInit, OnDestroy {
  @Input() message: string = '';
  unreadMessagesCount: number = 0;
  
  users: User[] = [];
  
  searchText: string = '';
  

  constructor(private router: Router, private authService: AuthService,
    private dialog: MatDialog) {
  }

  ngOnInit() {
    this.getAllUsers();
  }

  ngOnDestroy() {
    
  }

  getAllUsers() {
    this.authService.getAllUsers().subscribe(
      (users: User[]) => {
        console.log("call...1");
        if (users.length > 0) {
          console.log("call...2",users.length);
          const adminId = localStorage.getItem('uId');
          console.log("call...2.1",adminId);
          if (adminId !== null) {
            console.log("call...3");
            // Logged in Admin user,  Never come in to list of User list.
            this.users = users.filter((item: any) => item?.id !== parseInt(adminId, 10));
            console.log("call...4");
          }
        } else {
          console.log("call...5");
          this.users = [];
        }
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

  // deleteUser(userId: number) {
  //   this.authService.deleteUserById(userId).pipe(take(1)).subscribe(

  //     () => {
  //       this.getAllUsers();
  //       window.alert('Account deleted successfully');
  //     },
  //     (error) => {
  //       console.error('Error deleting user:', error);
  //     }
  //   );
  // }

  searchUsers(searchText: string) {
   
    this.authService.searchUsers(searchText).subscribe(
      (data: User[]) => {
        if (data.length > 0) {
          const adminId = localStorage.getItem('uId');
          if (adminId !== null) {
            this.users = data.filter((item: any) => item?.id !== parseInt(adminId, 10));
          }
        } else {
          this.users = [];
        }
      },
      (error: any) => {
        console.error('Error searching users', error);
      }
    );
  }

  onSearchInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement.value;
    this.searchUsers(value);
  }
  // updateUser(userId: any): void {
  //   const dialogRef = this.dialog.open(UpdateProfileComponent, {
  //     data: { id: userId },
  //     maxWidth: '100vw',
  //     maxHeight: '100vh',
  //     height: '90%',
  //     width: '80%'
  //   });
  //   dialogRef.afterClosed().subscribe(() => {
  //     this.getAllUsers();
  //   });
  // }
}
