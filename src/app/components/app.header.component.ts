import {Component, Output, EventEmitter} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, Http} from '@angular/http';

@Component({
    selector: 'header',
    templateUrl:'./app.header.component.html'
})


export class HeaderComponent {    
    searchText : string = "Search";
    phrase : string = "Search";
    @Output() search: EventEmitter<any> = new EventEmitter<any>();
    @Output() filter: EventEmitter<any> = new EventEmitter<any>();
    
    //includes http object to be used to get data in searchPhoto method
    constructor(){       
       
    }
    
    onSearch(phrase : string) {
        this.phrase = phrase;
        this.search.emit(phrase);
    }
    
    filterSearch(query : string) {       
        query = this.phrase + '^' + query;
        this.filter.emit(query);
    }
    
}