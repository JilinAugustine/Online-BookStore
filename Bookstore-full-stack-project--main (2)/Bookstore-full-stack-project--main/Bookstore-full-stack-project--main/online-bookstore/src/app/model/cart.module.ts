import { Book } from "./book.module";
import { User } from "./user.model";

export class Cart {
  cartId: number;
  quantity: number;
  mrpPrice: number;
  book: Book;
  user: User;

  constructor(cartId: number, quantity: number, mrpPrice: number, book: Book, user: User) {
    this.cartId = cartId;
    this.quantity = quantity;
    this.mrpPrice = mrpPrice;
    this.book = book;
    this.user = user;
  }
}

