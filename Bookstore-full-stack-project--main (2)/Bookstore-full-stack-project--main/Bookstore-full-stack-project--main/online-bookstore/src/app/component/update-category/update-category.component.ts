import { Component, Inject } from '@angular/core';
import { Category } from '../../model/category.module';
import { CategoryService } from '../../service/category.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { take } from 'rxjs';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrl: './update-category.component.css'
})
export class UpdateCategoryComponent {
  category:Category = new Category(0,"");
 constructor(
   public dialogRef: MatDialogRef<UpdateCategoryComponent>,
   @Inject(MAT_DIALOG_DATA) public data: any,
   private categoryService: CategoryService
 ){
  this.getCategoryData(data?.id);
 }
 getCategoryData(id:any):void{
  this.categoryService.getCategoryById(id).subscribe(
    (category : Category) =>{
      this.category = category;
    }
  );
 }

 update(): void {
  this.categoryService.updateCategory(this.data?.id,this.category).pipe(take(1)).subscribe((res: any) => {
    if (res?.id) {
       localStorage.setItem('categoryInfo',JSON.stringify(res));
       alert("Category updated successfully");
       this.closeDialog();
      }
    });
  }
  closeDialog(): void {
    this.dialogRef.close();
  }
 
}