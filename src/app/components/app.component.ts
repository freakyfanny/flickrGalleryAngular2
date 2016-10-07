import { Component, Input, OnInit } from '@angular/core';
import { FlickrService } from '../services/flickr.service';
import { FlickrPhoto } from '../services/flickrphoto.model';
//import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import 'rxjs/Rx';

@Component({
    selector: 'my-app',
    inputs: ['photos'],
    templateUrl:'./app.component.html'
})


export class AppComponent implements OnInit {    
    flickrPhotos: Array<FlickrPhoto> = [];
    //searchForm = new FormControl();
    
    //includes http object to be used to get data in searchPhoto method
    constructor(private flickrService: FlickrService){       
        this.getRecentPhotos();
    }

    searchFlickrPhoto(query: string) { 
        this.flickrPhotos = this.flickrService.getFlickrResult(query);      
    }
    
    getRecentPhotos() {    
        this.flickrPhotos = this.flickrService.getRecent();  
    }
    
    ngOnInit() {
        this.getRecentPhotos();
    }
}