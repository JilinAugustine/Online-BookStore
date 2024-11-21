import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Category } from '../model/category.module';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
 
  private loginUrl = 'http://localhost:9005/categories';
  constructor(private router:Router, private httpClient:HttpClient) { }

  
  getAllCategory(): Observable<Category[]>{
    console.log("call...");
    return this.httpClient.get<Category[]>(`${this.loginUrl}/veiwcategory`);
  }

  deleteCategoryById(id:number):Observable<void>{
    return this.httpClient.delete<void>(`${this.loginUrl}/removecategory/${id}`,{ responseType: 'text' as 'json' });
  }

  addCategory(body: any): Observable<Category[]>{
    return this.httpClient.post<Category[]>(`${this.loginUrl}/addcategory`, body, { responseType: 'text' as 'json' });
   }

  updateCategory(id: any, category: Category):Observable<Category> {
    return this.httpClient.put<Category>(`${this.loginUrl}/updatecategory/${id}`, category);
  }

  getCategoryById(id: any): Observable<Category>{
    return this.httpClient.get<Category>(`${this.loginUrl}/findcategorybyid/${id}`);
  }

  searchCategorys(searchText: string): Observable<Category[]>{
    return this.httpClient.get<Category[]>(`${this.loginUrl}/search?searchText=${searchText}`);
  }
  getCategoryCount(): Observable<number> {
    return this.httpClient.get<number>(this.loginUrl+'/count');
  }
}
