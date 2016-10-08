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
    
    //includes http object to be used to get data in searchPhoto method
    constructor(private flickrService: FlickrService){       
        this.getRecentPhotos();
    }

    searchFlickrPhoto(searchPhrase: string) { 
        this.flickrPhotos = this.flickrService.getFlickrResult(searchPhrase);      
    }
    
    getRecentPhotos() {    
        this.flickrPhotos = this.flickrService.getRecent();  
    }
    
    ngOnInit() {
        this.getRecentPhotos();
        
/*        this.searchBox.valueChanges
            .debounceTime(500)
            .distinctUntilChanged()
            .switchMap((query: string) => this.flickrService.getFlickrResult(query))
            .subscribe(value => {
                this.flickrPhotos.push(new FlickrPhoto(value.id, value.server, value.farm, value.secret, value.title, value.owner));                
            });*/
    }
}