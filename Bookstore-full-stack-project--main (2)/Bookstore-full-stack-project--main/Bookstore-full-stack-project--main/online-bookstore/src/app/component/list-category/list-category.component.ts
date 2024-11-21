import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Category } from '../../model/category.module';
import { CategoryService } from '../../service/category.service';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { UpdateCategoryComponent } from '../update-category/update-category.component';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrl: './list-category.component.css'
})
export class ListCategoryComponent implements OnInit, OnDestroy {
  @Input() message: string = '';
  unreadMessagesCount: number = 0;

  categorys: Category[] = [];

  searchText: string = '';

  constructor(private router: Router, private categoryService: CategoryService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.getAllCategorys();
  }

  ngOnDestroy() {

  }

  getAllCategorys():void  {
    this.categoryService.getAllCategory().pipe(take(1)).subscribe((res: any) => {
      this.categorys = res;
      console.log('Products:', res);
    },
    (error) => {
      console.error('Error fetching Categorys:', error);
    }
  );
    // this.categoryService.getAllCategory().subscribe(
    //   (category: Category[]) => {
    //     console.log("call...1");
    //     if (category.length > 0) {
          
    //       console.log("call...2",category.length);
    //       const categoryId = localStorage.getItem('cId');
    //       console.log("call...2.1",categoryId);
    //       if (categoryId !== null) {
    //         console.log("call...3",categoryId);
    //         this.categorys = category.filter((item: any) => item?.id !== parseInt(categoryId, 10));
    //         console.log("call...4");
    //       }
    //     } else {
    //       console.log("call...5");
    //       this.categorys = [];
    //     }
    //   },
    //   (error) => {
    //     console.error('Error fetching categorys', error);
    //   }
    // );
  }

  deletecategory(categoryId: number) {
    this.categoryService.deleteCategoryById(categoryId).pipe(take(1)).subscribe(

      () => {
        this.getAllCategorys();
        window.alert('Category deleted successfully');
      },
      (error) => {
        console.error('Error deleting category:', error);
      }
    );
  }

  searchCategory(searchText: string) {

    this.categoryService.searchCategorys(searchText).subscribe(
      (data: Category[]) => {
        if (data.length > 0) {
          console.log("**length***",data.length);
          const categoryId = localStorage.getItem('id');
          console.log("*****",categoryId);
        this.categorys=data;
        } else{
          this.categorys = [];
        }
      },
      (error) => {
        console.error('Error fetching categorys', error);
      }
    );
  }

  onSearchInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement.value;
    this.searchCategory(value);
  }
  updatecategory(categoryId: any): void {
    const dialogRef = this.dialog.open(UpdateCategoryComponent, {
      data: { id: categoryId },
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '35%',
      width: '80%'
    });
    dialogRef.afterClosed().subscribe(() => {
      this.getAllCategorys();
    });
  }
}