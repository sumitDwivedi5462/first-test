import { Component, OnInit } from '@angular/core';
import { BookModel } from 'src/app/book.model';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  bookList: BookModel[] = [];
  url:string = '/book-list'
  constructor(private common: CommonService) {}

  ngOnInit(): void {
    this.getBookList(this.url);
  }

  getBookList(url: string) {
    this.common.get(url).subscribe((res: {books: BookModel[]} | unknown) => {
      const result = res as {books: BookModel[]};
      this.bookList = result.books;
    });
  }

  filterBooks(search: any){
    this.getBookList(`${this.url}/${search.value}`);
  }

  addToCart(id:number){
    this.common.post('/book/add-to-cart',id).subscribe((res:  {books: BookModel[]} | unknown)=>{
      const result = res as {books: BookModel[]};
      this.bookList = result.books;
    });
  }
}
