import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Book } from '../../shared/book';

@Component({
    selector: 'app-book-details',
    templateUrl: './book-details.component.html',
    //styleUrls: ['./book-details.component.scss']
})
/** BookDetails component*/
export class BookDetailsComponent 
{
    @Input() book: Book;

    @Output() showListEvent = new EventEmitter<any>();

    //Methode zum Anzeigen der Buchliste
    showBookList() {
        this.showListEvent.emit();  // Event feuern
    }

    getRaiting(num: number) {
        return new Array(num);
    }
}