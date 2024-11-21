import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:9005/users';
  private url = 'http://localhost:9005/users';
  private loggedInUser: User | null = null;



  constructor(private http: HttpClient,
    private router: Router) { }

  loginUser(user: User): Observable<any> {
    console.log('Sending login request with credentials:', user);
    return this.http.post(`${this.url}/login`, user).pipe(
      tap((response: any) => {
        this.storeLoggedInUser(response);
      })
    );
  }
  storeLoggedInUser(user: User) {
    this.loggedInUser = user;
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url + '/userveiw');
  }

  deleteUserById(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.loginUrl}/removeUser/${userId}`, { responseType: 'text' as 'json' });
  }

  public registerUser(user: User) {
    return this.http.post(`${this.url}/adduser`, user);
  }
  

  // Get the stored logged-in user
  getLoggedInUser(): User | null {
    return this.loggedInUser;
  }

  // updateUserByUsername(username: string, user: User): Observable<User> {
  //   return this.http.put<User>(`${this.loginUrl}/${username}/updateUsername`, user);
  // }
  getUserById(userId: any): Observable<User> {
    return this.http.get<User>(`${this.url}/finduserbyid/${userId}`);
  }
  searchUsers(searchText: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/search?searchText=${searchText}`);
  }

  clientLogout(): void {
    localStorage.clear();
    this.router.navigate(['/']);
  }

  updateUserInformation(id: any, user: User): Observable<User> {
    return this.http.put<User>(`${this.url}/updateuser/${id}`, user);
  }

  navigate(url: string): void {
    this.router.navigate(['/' + url]);
  }

  isAdmin():boolean {
    return localStorage && localStorage.getItem('role') === 'admin' ? true : false;
  }
  forgotPassword(body: any):Observable<any> {
    return this.http.post(this.url + "/forgotpassword", body);
  }
  changePassword(uid: any,password:any):Observable<any> {
    return this.http.post(this.url + "/"+uid+"/"+password,{});
  }
  getUserCount(): Observable<number> {
    return this.http.get<number>(this.url +'/count');
  }
  getAdminId(): Observable<number> {
    return this.http.get<number>(this.url +'/adminid');
  }
}
