import { Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import { FlickrService } from '../services/flickr.service';
import { FlickrPhoto } from '../services/flickrphoto.model';


@Component({
    selector: 'my-app',
    inputs: ['photos'],
    templateUrl:'./app.component.html'
})


export class AppComponent implements OnInit { 
    flickrPhotos: Array<FlickrPhoto> = [];
    loading : boolean = false;
    
    //includes http object to be used to get data in searchPhoto method
    constructor(private flickrService: FlickrService){       
        this.getRecentPhotos();
    }

    //find phots just with search
    searchFlickrPhoto(searchPhrase: string) {
        this.loading = true;
        this.flickrPhotos = this.flickrService.getFlickrResult(searchPhrase);

        if (this.flickrPhotos === []) {
            this.loading = false;
        }
    }
    
    //search for photos with searchquery and color
    searchFilterFlickrPhoto(query:string) {        
        this.loading = true;
        let search : string[] = query.split("^");
        this.flickrPhotos = this.flickrService.getFlickrFilterResult(search[0],search[1]); 

        if (this.flickrPhotos === []) {
            this.loading = false;
        }
    }
    
    //gets the recent photos    
    getRecentPhotos() {    
        this.flickrPhotos = this.flickrService.getRecent();  
    }
    
    ngOnInit() {
        this.getRecentPhotos();
    }
}