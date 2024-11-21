// review.model.ts
export class Review {
  id: number = 0;
  comment: string = '';
  rating: number = 0;
  username: string = '';

  constructor(comment: string, rating: number, username: string) {
    this.comment = comment;
    this.rating = rating;
    this.username = username;
  }
}
