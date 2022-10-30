import { Component, OnInit } from '@angular/core';
import { Book } from 'src/types/Book';
import { Cart } from 'src/types/Cart';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  constructor(private booksService: BooksService) {
    this.books = this.booksService.getBooks();
  }

  ngOnInit(): void {}

  books: Book[] = [];

  isDisabled: boolean = false;
  isShowing: boolean = true;
}
