import { Component } from '@angular/core';
import { Book } from '../../shared/book';

@Component({
    selector: 'app',
    //templateUrl: './app.component.html',
    template: `<app-book-list *ngIf="listOn" (showDetailsEvent)="showDetails($event)"> </app-book-list> 
               <app-book-details *ngIf="detailsOn" (showListEvent)="showList()" [book]="book"> </app-book-details>`
    
    //styleUrls: ['./app.component.css']
})

export class AppComponent {
    book: Book;
    listOn = true;
    detailsOn = false;

    showList() {
        this.listOn = true;
        this.detailsOn = false;
    }

    showDetails(book: Book) {
        this.book = book;
        this.listOn = false;
        this.detailsOn = true;
    }

}
