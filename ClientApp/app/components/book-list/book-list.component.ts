import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Book, Thumbnail } from '../../shared/book';

@Component({
    selector: 'app-book-list',
    templateUrl: '../book-list/book-list.component.html',
    
    //styleUrls: ['../../../styles/font_awesome_scss/font-awesome.scss']
    //styleUrls: ['../../../../node-modules/semantic-ui-css/semantic.css']
})
/** book_list component*/
export class BookListComponent implements OnInit
{
    books: Book[];

    @Output() showDetailsEvent = new EventEmitter<Book>();

    showDetails(book: Book) {
        this.showDetailsEvent.emit(book);
    }

    /** book_list ctor */
    //constructor() { }

    /** Called by Angular after book-list component is initialized */
    ngOnInit(): void {
        this.books = [
            new Book('9783864903571', 'Angular', [' Johannes Hoppe', 'Danny Koppenhagen', 'Ferdinand Malcher', 'Gregor Woiwode'], new Date(2017, 3, 1),
                'Grundlagen, mein erstes Buch', 5, [new Thumbnail('https://ng-buch.de/cover2.jpg', 'Buchcover')], 'Mit Angular setzen Sie auf ein modernes und modulares...'),

            new Book('9783864901546', 'AngularJS', [' Philipp Tarasiewicz', 'Robin Böhm'], new Date(2014, 5, 29),
                'Eine praktische Einführung', 5, [new Thumbnail('https://ng-buch.de/cover1.jpg', 'Buchcover')], 'Dieses Buch führt Sie anhand eines zusammenhängenden Beispielprojekts...')
        ];


            
    }
}