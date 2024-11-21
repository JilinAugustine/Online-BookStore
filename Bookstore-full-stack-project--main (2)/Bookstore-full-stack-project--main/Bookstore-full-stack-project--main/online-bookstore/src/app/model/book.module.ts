import { Category } from "./category.module";

export class Book {
  id: number = 0;
  bookname: string = '';
  author: string = '';
  isbn: string = '';
  mrpPrice: number = 0;
  image: string = '';
  description: string = '';
  bquantity: number = 0;
  publisher: string = '';
  category: Array<Category> = [];

  constructor(
    id: number,
    bookname: string,
    author: string,
    isbn: string,
    mrpPrice: number,
    image: string,
    description: string,
    bquantity: number,
    publisher: string,
    category: Array<Category>,

  ) {
    this.id = id;
    this.bookname = bookname;
    this.author = author;
    this.isbn = isbn;
    this.mrpPrice = mrpPrice;
    this.image = image;
    this.description = description;
    this.bquantity = bquantity;
    this.publisher = publisher;
    this.category = category;

  }
}
