import {Component, Output, EventEmitter} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, Http} from '@angular/http';
import 'rxjs/Rx';

@Component({
    selector: 'header',
    templateUrl:'./app.header.component.html'
})


export class HeaderComponent {    
    searchText : string = "Search";
    searchPhrase : string = "Search"
    @Output() search: EventEmitter<any> = new EventEmitter<any>();
    
    //includes http object to be used to get data in searchPhoto method
    constructor(){       
       
    }
    
    onSearch(searchPhrase : string) {      this.search.emit(searchPhrase);
    }
    
}