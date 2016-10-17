import { Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { FlickrService } from '../services/flickr.service';
import { FlickrPhoto } from '../services/flickrphoto.model';


@Component({
    selector: 'my-app',
    inputs: ['photos'],
    templateUrl:'./app.component.html'
})


export class AppComponent implements OnInit { 
    flickrPhotos: Array<FlickrPhoto> = [];
    message : string = "";
    
    //includes http object to be used to get data in searchPhoto method
    constructor(private flickrService: FlickrService){       
        this.getRecentPhotos();
    }
    
    response() : string {
        return "Waiting for flickr to respond";
    }

    //find phots just with search
    searchFlickrPhoto(searchPhrase: string) {   
        this.message = "";
        this.flickrPhotos = [];
        window.setTimeout(this.flickrPhotos = this.flickrService.getFlickrResult(searchPhrase), 10000);
    }
    
    //search for photos with searchquery and color
    searchFilterFlickrPhoto(query:string) {   
        this.flickrPhotos = [];
        let search : string[] = query.split("^");        
        window.setTimeout(this.flickrPhotos = this.flickrService.getFlickrFilterResult(search[0],search[1]), 10000);
    }
    
    //gets the recent photos    
    getRecentPhotos() {    
        this.flickrPhotos = this.flickrService.getRecent();  
    }
    
    ngOnInit() {
        this.getRecentPhotos();
    }
}