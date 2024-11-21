import { Component, OnInit } from '@angular/core';
import { Category } from '../../model/category.module';
import { Book } from '../../model/book.module';
import { CategoryService } from '../../service/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../service/book.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrl: './addbook.component.css'
})
export class AddbookComponent implements OnInit {

  category: Category = new Category(0, "");
  catgoryList: Array<Category> = [];
  book: Book = new Book(0, "", "", "", 0, "", "", 0, "", this.catgoryList);
  isEdit: boolean = false;
  errorMessage: string = '';
  constructor(
    private categoryservice: CategoryService, private router: Router, private bookservice: BookService, private activatedRoute: ActivatedRoute
  ) { this.getCategoryList(); }

  ngOnInit(): void {
    console.log('CCCCC');
    setTimeout(() => {
      this.activatedRoute.queryParams.subscribe((res: any) => {
        console.log('>>>>>>>>', res);
        if (res && res?.id) {
          this.isEdit = true;
          // this.getBookById(res?.pid);
          this.getBookById(res?.id);
        }
      });
    }, 1000);

  }
  getBookById(id: any): void {
    this.bookservice.findBookById(id).pipe(take(1)).subscribe((res) => {
      if (res && res?.id) {
        this.book.id = res?.id;
        this.book.bookname = res?.bookname;
        this.book.author = res?.author;
        this.book.category = <any> res?.category;
        this.book.publisher = res?.publisher;
        this.book.description = res?.description;
        this.book.bquantity = res?.bquantity;
        this.book.mrpPrice = res?.mrpPrice;
        this.book.isbn = res?.isbn;
        this.book.image = res?.image;
        this.category = <any>res?.category;
        console.log('>>>>>>>>>>>>>>>>%%>>', this.category)
      }
    });
  }

  addUpdateBook(): any {
    if (this.book.bookname === '') {
      alert('Book name should not be blank');
      return;
    }
    if (this.book.author === '') {
      alert('Author name should not be blank');
      return;
    }
    if (this.book.isbn === '') {
      alert('isbn should not be blank');
      return;
    }
    if (this.book.mrpPrice === 0) {
      alert('MRP Price should not be blank');
      return;
    }
    if (this.book.image === '') {
      alert('Image should not be blank');
      return;
    }
    if (this.book.description === '') {
      alert('Description should not be blank');
      return;
    }
    if (this.book.bquantity === 0) {
      alert('Quantity should not be blank');
      return;
    }
    if (this.book.publisher === '') {
      alert('Publisher should not be blank');
      return;
    }
    if (this.book.category === this.catgoryList) {
      alert('Category should not be blank');
      return;
    }
    const pCategory = this.catgoryList.find((item: Category) => item.id === parseInt(this.category.id.toString()))
    console.log('>>>>>', pCategory);
    
    const body: any = {
      bookname: this.book.bookname,
      author: this.book.author,
      isbn: this.book.isbn,
      mrpPrice: this.book.mrpPrice,
      image: this.book.image,
      description: this.book.description,
      bquantity: this.book.bquantity,
      publisher: this.book.publisher,
      category: pCategory
    };
    if (!this.isEdit) {
      this.bookservice.addBook(body).pipe(take(1)).subscribe((res: any) => {
        console.log("add");
        alert('Book Added successfully');
        this.router.navigate(['list-book']);
        console.log("res",res);
        console.log(" res?.id", res?.id);
        if (res && res?.id) {
          console.log("res");
          alert('Book Added successfully');
          this.router.navigate(['list-book']);
        }
      });
    } else {
      body.id = this.book.id;
      this.bookservice.updateBook(this.book.id, body).subscribe((res: any) => {
        if (res && res?.id) {
          alert('Book Updated successfully');
          this.router.navigate(['list-book']);
        }
      }
      )

    }
  }
  getCategoryList(): void {
    console.log('^^^^^');
    this.bookservice.getAllCategory().pipe(take(1)).subscribe((res:any) => {
      console.log('$$$$', res);
      if (res && Array.isArray(res)){
        this.catgoryList = res;
        console.log("U***", res)
      }
    });
  }
}
