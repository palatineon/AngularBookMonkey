import { Component, Input } from '@angular/core';
import { Book } from '../../shared/book';

@Component({
    selector: 'a.app_book-list-item',
    templateUrl: './book-list-item.component.html',
    //styleUrls: ['../book-list-item/book-list-item.component.scss']
})

/** book-list-item component*/
export class BookListItemComponent 
{
    ///** book-list-item ctor */
    //constructor() { }

    @Input() book: Book;
}