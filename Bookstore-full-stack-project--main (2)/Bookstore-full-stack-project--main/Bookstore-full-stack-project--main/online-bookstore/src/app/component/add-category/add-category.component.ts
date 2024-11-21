import { Component } from '@angular/core';
import { CategoryService } from '../../service/category.service';
import { take } from 'rxjs';
import { Category } from '../../model/category.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {
  category:Category=new Category(0,"");
  constructor(
    private service: CategoryService,private router: Router
  ) {}

  addCategory(): void {
    if (this.category.name === '') {
      console.log()
      alert("Please add category");
      return;
    }
    const body = {
      name: this.category.name
    };
    this.service.addCategory(body).pipe(take(1)).subscribe((res) => {
      if (res) {
        alert('Category Added Successfully');
        this.router.navigate(['/list-category']);
      }
      console.log('>>>>>');
    });
  }

}
