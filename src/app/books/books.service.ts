import { book as Books } from '../../__mock__/book';

export class BooksService {
  constructor() {}

  getBooks() {
    return Books;
  }
}
